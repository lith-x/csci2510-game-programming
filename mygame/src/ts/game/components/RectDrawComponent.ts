import chroma from "chroma-js";
import GameObject from "../../engine/GameObject";
import DrawComponent from "../../engine/DrawComponent";

export default class RectDrawComponent extends DrawComponent {
    public color: chroma.Color;

    constructor(gameObject: GameObject, color: string) {
        super(gameObject);
        this.color = chroma(color);
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color.css();
        ctx.fillRect(this.gameObject.x, this.gameObject.y, 100, 200);
    }
}
