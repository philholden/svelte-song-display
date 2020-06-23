import SongContext from "./song-context";
import Song from "./song";
import drawSongToGetBounds from "./draw-song-to-get-bounds";
import drawVersesToGetBounds from "./draw-verses-to-get-bounds";
import drawVerse from "./draw-verse";
import drawSong from "./draw-song";
import renderAffineText from "./render-affine-text";
import { valiant } from "./valiant";

export default class SongDisplay {
  constructor({
    lineHeight,
    fontHeight,
    fontFamily,
    verseGap,
    fontWeight,
    fillStyle,
  }) {
    let _fillStyle = fillStyle;
    if (/#[0-9a-fA-F]{3}$/.test(fillStyle)) {
      const [_, r, g, b] = fillStyle;
      _fillStyle = "#" + r + r + g + g + b + b;
    }
    if (/#[0-9a-fA-F]{6}$/.test(_fillStyle)) {
      _fillStyle = _fillStyle.replace("#00", "#01");
    } else {
      _fillStyle = "#fff";
    }
    this.render = this.render.bind(this);
    this.isBlank = true;
    this.mode = "SHOW_VERSE";
    this.verseId = 0;
    this.song = new Song(valiant);
    this.songCtx = new SongContext({
      lineHeight: lineHeight || 1.4,
      fontHeight: fontHeight || 25,
      fontName:
        fontFamily ||
        `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      verseGap: verseGap || 0.75,
      fontWeight,
      fillStyle: _fillStyle,
    });
    this.verseLayouts = this.songCtx.getPlausibleVerseLayouts(this.song);
    this.songLayouts = this.songCtx.getPlausibleSongLayouts(this.song);
  }

  setState({
    song,
    isBlank,
    verseId,
    mode, //'SHOW_VERSE' | 'SHOW_SONG'
  }) {
    if (song !== this.song) {
      this.verseLayouts = this.songCtx.getPlausibleVerseLayouts(song);
      this.songLayouts = this.songCtx.getPlausibleSongLayouts(song);
    }
    if (isBlank !== undefined) this.isBlank = isBlank;
    if (verseId !== undefined) this.verseId = verseId;
    if (mode !== undefined) this.mode = mode;
  }

  render(canvas) {
    const ctx = canvas.getContext("2d");
    const { width, height } = canvas;
    ctx.fillColor = "#000";
    ctx.fillRect(0, 0, width, height);

    if (this.isBlank) return;

    const songRender = () => {
      const bestfit = this.songCtx.findBestFit(this.songLayouts, width, height);
      const metrics = drawSongToGetBounds({
        song: bestfit,
        canvasWidth: width,
        canvasHeight: height,
      });

      return {
        metrics,
        renderCallback: (ctx, offx, offy) => {
          drawSong({
            song: bestfit,
            ctx,
            x: offx,
            y: offy,
          });
        },
      };
    };

    const verseRender = () => {
      const bestfit = this.songCtx.findBestFit(
        this.verseLayouts,
        width,
        height
      );
      const metrics = drawVersesToGetBounds({
        song: bestfit,
        canvasWidth: width,
        canvasHeight: height,
      });

      return {
        metrics,
        renderCallback: (ctx, offx, offy) => {
          drawVerse({
            song: bestfit,
            ctx,
            x: offx,
            y: offy,
            verse: this.verseId,
          });
        },
      };
    };

    const renderer = this.mode === "SHOW_VERSE" ? verseRender() : songRender();

    renderAffineText(ctx, renderer.metrics, renderer.renderCallback, {
      fill: "#fff",
      posX: width / 2,
      posY: height / 2,
      scaleX: 1,
      scaleY: 1,
    });
  }
}
