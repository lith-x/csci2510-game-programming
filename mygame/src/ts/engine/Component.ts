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
    abstract draw(ctx: CanvasRenderingContext2D): void;
}

export abstract class UpdateComponent extends Component {
    abstract update(): void;
}
