import chroma from "chroma-js";
import { DrawComponent, GameObject } from "../../engine";

export class DrawRectComponent extends DrawComponent {
    public width: number;
    public height: number;
    public color: chroma.Color;

    constructor(gameObject: GameObject, w: number, h: number, color: chroma.Color) {
        super(gameObject);
        this.width = w;
        this.height = h;
        this.color = color;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color.css();
        ctx.fillRect(this.gameObject.x, this.gameObject.y, this.width, this.height);
    }
}
