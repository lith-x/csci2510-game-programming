import Shape from "./Shape";

export default class Circle extends Shape {
    get radius() {
        return this.width / 2;
    }
    set radius(val: number) {
        this.width = val * 2;
        this.height = val * 2;
    }

    constructor(x: number, y: number, radius: number) {
        super(x, y, radius * 2, radius * 2);
        this.radius = radius;
    }

    protected defineDraw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
}
