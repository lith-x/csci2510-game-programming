import Shape from "./Shape";

export default class Rectangle extends Shape {
    protected defineDraw(ctx: CanvasRenderingContext2D) {
        ctx.fillRect(0, 0, this.width, this.height);
        ctx.strokeRect(0, 0, this.width, this.height);
    }
}