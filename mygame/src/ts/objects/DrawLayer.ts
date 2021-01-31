import IDrawable from "./IDrawable";

export default class DrawLayer {
    public drawables: IDrawable[] = [];

    draw(ctx: CanvasRenderingContext2D) {
        this.drawables.forEach(drawable => drawable.draw(ctx));
    }
}