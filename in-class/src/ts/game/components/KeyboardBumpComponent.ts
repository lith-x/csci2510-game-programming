import { GameObject, Component } from "../../engine";

export class KeyboardBumpComponent extends Component {
    public speed: number;

    constructor(gameObject: GameObject, speed = 1) {
        super(gameObject);
        this.speed = speed;
    }

    onKeyDown(keys: KeyDict) {
        if (keys["a"] || keys["ArrowLeft"]) this.gameObject.x -= this.speed;
        if (keys["d"] || keys["ArrowRight"]) this.gameObject.x += this.speed;
        if (keys["w"] || keys["ArrowUp"]) this.gameObject.y -= this.speed;
        if (keys["s"] || keys["ArrowDown"]) this.gameObject.y += this.speed;
    }
}
