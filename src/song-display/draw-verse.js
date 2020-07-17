export default function drawVerse({
  song,
  verse,
  ctx,
  x,
  y,
  isStroke = false,
}) {
  let lineNum = 0;
  let mLineHeight = song.fontMetrics.h * song.lineHeight;
  ctx.font =
    (song.fontWeight === undefined ? "" : song.fontWeight + " ") +
    song.fontHeight +
    "px " +
    song.fontName;
  if (song.fillStyle) {
    ctx.fillStyle = song.fillStyle;
    ctx.strokeStyle = song.fillStyle;
  }
  song.verses[verse].lines.forEach((line) => {
    line.brokenLine.split("\n").forEach((fragment) => {
      if (isStroke) {
        ctx.strokeText(
          fragment,
          x,
          y + song.fontMetrics.ascent + lineNum * mLineHeight
        );
      } else {
        ctx.fillText(
          fragment,
          x,
          y + song.fontMetrics.ascent + lineNum * mLineHeight
        );
      }
      lineNum++;
    });
  });
}
