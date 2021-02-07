// rectangle class

class Rectangle {
    public x: number;
    public y: number;
    public w: number;
    public h: number;
    public hue = 0;
    public angle = 0;
    private _rotatespeed = 0.005;

    constructor(x: number, y: number, w: number, h: number) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `hsl(${this.hue}, 100%, 50%)`;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
        ctx.resetTransform();
    }

    update() {
        this.hue += 1;
        this.hue %= 360;
        this.angle += this._rotatespeed;
        this.angle %= Math.PI * 2;
    }
}

// script start

const cvs = document.querySelector("canvas");
const ctx = cvs.getContext("2d");
const rect = new Rectangle(cvs.width / 2, cvs.height / 2, 200, 200);

const draw = () => {
    ctx.fillStyle = "black";
    ctx.globalAlpha = 0.04;
    ctx.fillRect(0, 0, cvs.width, cvs.height);
    ctx.globalAlpha = 1;
    rect.draw(ctx);
    rect.update();
    // window.requestAnimationFrame(draw); <- janky
}

setInterval(draw, 1000 / 144); // <- less janky
// draw();