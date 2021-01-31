import IDrawable from "./IDrawable";

export enum Layers {
    Background = 0,
    Midground,
    Foreground,
    GUI
}

export default class DrawLayer {
    public drawables: IDrawable[] = [];

    draw(ctx: CanvasRenderingContext2D) {
        this.drawables.forEach(drawable => drawable.draw(ctx));
    }
}