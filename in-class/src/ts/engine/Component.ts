import chroma from "chroma-js";
import { GameObject } from "./GameObject";

export class Component {
    protected gameObject: GameObject;
    public args: any[];

    constructor(gameObject: GameObject, ...args: any[]) {
        this.gameObject = gameObject;
        this.args = args;
    }
}

export abstract class DrawComponent extends Component {
    public color: chroma.Color;
    abstract draw(ctx: CanvasRenderingContext2D): void;
}

export abstract class UpdateComponent extends Component {
    abstract update(): void;
}

export class ScreenTextComponent extends DrawComponent {
    public color: chroma.Color;
    public font: string;
    public string: string;

    constructor(gameObject: GameObject, string: string, options: { color?: string, font?: string }) {
        super(gameObject);
        this.string = string;
        this.color = chroma(options?.color || "red");
        this.font = options?.font || "32pt arial";
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color.css();
        ctx.font = this.font;
        ctx.fillText(this.string, this.gameObject.x, this.gameObject.y);
    }
}
