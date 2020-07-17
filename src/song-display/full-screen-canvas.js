//body must have overflow hidden

export default class FullScreenCanvas {
  constructor(canvas) {
    if (!canvas) {
      canvas = document.createElement("canvas");
      document.body.appendChild(canvas);
      canvas.style.top = 0;
      canvas.style.left = 0;
      canvas.style.display = "block";
      canvas.style.position = "absolute";
      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
    }
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.resizeFromEl();
    this.resizeListener = this.resizeFromEl.bind(this);

    window.addEventListener("resize", this.resizeListener);
  }

  resizeFromEl() {
    let bounds = document.body.getBoundingClientRect();
    this.resize(bounds.width, bounds.height);
  }

  addEventListener(...args) {
    this.canvas.addEventListener.apply(this.canvas, args);
  }

  resize(w, h) {
    let ratio = window.devicePixelRatio || 1;
    this.w = w * ratio;
    this.h = h * ratio;
    this.canvas.width = this.w;
    this.canvas.height = this.h;
    this.canvas.style.width = w + "px";
    this.canvas.style.height = h + "px";
    this.canvas.dispatchEvent(new Event("resize"));
  }

  destroy() {
    window.removeEventListener("resize", this.resizeListener);
  }
}
