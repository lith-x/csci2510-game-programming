import chroma from "chroma-js";

export default interface IDrawable {
    x: number;
    y: number;
    width: number;
    height: number;
    stroke: chroma.Color;
    fill: chroma.Color;
    color: chroma.Color;
    draw(ctx: CanvasRenderingContext2D): void;
}
