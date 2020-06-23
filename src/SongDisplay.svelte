<script>
  import ResizeObserver from "resize-observer-polyfill";
  import { onMount } from "svelte";
  import SongDisplay from "./song-display";
  import { valiant } from "./song-display/valiant";
  import Song from "./song-display/song";

  let ratio = window.devicePixelRatio || 1;
  let canvas;
  let onResize;
  let _width;
  let _height;
  let song;
  export let text = valiant;
  export let blank = false;
  export let verseIndex = 0;
  export let showSong = false;
  export let style = "width: 100%; height: 100%;";
  export let fontSize = 25;
  export let verseGap = 0.75;
  export let lineHeight = 1.4;
  export let fontFamily = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
  export let fontWeight = "400";
  export let fillStyle = "#fff";
  const songDisplay = new SongDisplay({
    fontSize,
    lineHeight,
    fontFamily,
    verseGap,
    fontWeight,
    fillStyle
  });

  onMount(() => {
    let now = 0;
    let clear;
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (performance.now() - now > 100) {
          clearTimeout(clear);
          _onResize(entry.contentRect);
          now = performance.now();
        } else {
          clearTimeout(clear);
          clear = setTimeout(() => _onResize(entry.contentRect), 100);
        }
      }
    });
    resizeObserver.observe(canvas);

    return () => {
      clearTimeout(clear);
      resizeObserver.unobserve(canvas);
    };
  });

  function _onResize({ width, height }) {
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    if (typeof onResize === "function") onResize(canvas);
  }

  $: {
    song = new Song(text);
  }
  $: {
    if (song) {
      songDisplay.setState({
        song,
        isBlank: blank,
        verseId: verseIndex,
        mode: showSong ? "SHOW_SONG" : "SHOW_VERSE"
      });
      if (canvas) songDisplay.render(canvas);
    }
  }
</script>

<canvas {style} bind:this={canvas} />
