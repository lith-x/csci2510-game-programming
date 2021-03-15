import chroma from "chroma-js";
import { GameObject } from "../../engine";
import { DrawRectComponent } from "./DrawRect";

export class GridComponent extends DrawRectComponent {
    public rows: number;
    public cols: number;
    public innerm: number;
    public outerm: number;

    constructor(gameObject: GameObject, h: number, w: number, rows: number, cols: number, outerm: number, innerm: number) {
        super(gameObject, h, w, chroma.gl(0, 0, 0, 0));
        this.rows = rows;
        this.cols = cols;
        this.outerm = outerm;
        this.innerm = innerm;

        this.populateRects();
    }

    draw(ctx: CanvasRenderingContext2D) { }

    populateRects() {
        const rectw = (this.width - ((this.cols - 1) * this.innerm + 2 * this.outerm)) / this.cols;
        const recth = (this.height - ((this.rows - 1) * this.innerm + 2 * this.outerm)) / this.rows;
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                const rectx = this.gameObject.x + this.outerm + col * (rectw + this.innerm);
                const recty = this.gameObject.y + this.outerm + row * (recth + this.innerm);
                const rect = new GameObject();
                const drawc = new DrawRectComponent(rect, rectw, recth, chroma("magenta"));
                rect.components.push(drawc);
                rect.x = rectx;
                rect.y = recty;
                this.gameObject.children.push(rect);
            }
        }
    }
}
