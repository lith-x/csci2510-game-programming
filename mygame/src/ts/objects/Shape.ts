import chroma from "chroma-js";
import IDrawable from "./IDrawable";

export default abstract class Shape implements IDrawable{
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public xscale = 1;
    public yscale = 1;
    public angle = 0;
    public fill = chroma("magenta");
    public stroke = chroma("magenta");

    get color() {
        return this.fill;
    }
    set color(val: chroma.Color) {
        this.fill = val;
        this.stroke = val;
    }

    get cx() {
        return this.x + this.width / 2;
    }
    set cx(val: number) {
        this.x = val - this.width / 2;
    }

    get cy() {
        return this.y + this.height / 2;
    }
    set cy(val: number) {
        this.y = val - this.height / 2;
    }

    get scale() {
        return this.xscale;
    }
    set scale(val: number) {
        this.xscale = val;
        this.yscale = val;
    }


    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.fill.css();
        ctx.strokeStyle = this.stroke.css();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.scale(this.xscale, this.yscale);
        this.defineDraw(ctx);
        ctx.resetTransform();
    }

    move(delX: number, delY: number) {
        this.x += delX;
        this.y += delY;
    }

    protected abstract defineDraw(ctx: CanvasRenderingContext2D): void;
}
