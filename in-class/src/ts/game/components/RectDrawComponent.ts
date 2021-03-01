import chroma from "chroma-js";
import { DrawComponent, GameObject } from "../../engine";

export class RectDrawComponent extends DrawComponent {
    constructor(gameObject: GameObject, color: string) {
        super(gameObject);
        this.color = chroma(color);
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color.css();
        ctx.fillRect(this.gameObject.x, this.gameObject.y, 100, 200);
    }
}
