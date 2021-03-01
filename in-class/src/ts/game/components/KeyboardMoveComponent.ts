import { Input, GameObject, UpdateComponent } from "../../engine";

export class KeyboardMoveComponent extends UpdateComponent {
    public speed: number;

    constructor(gameObject: GameObject, speed = 1) {
        super(gameObject);
        this.speed = speed;
    }

    update() {
        if (Input.getKey("a") || Input.getKey("ArrowLeft")) this.gameObject.x -= this.speed;
        if (Input.getKey("d") || Input.getKey("ArrowRight")) this.gameObject.x += this.speed;
        if (Input.getKey("w") || Input.getKey("ArrowUp")) this.gameObject.y -= this.speed;
        if (Input.getKey("s") || Input.getKey("ArrowDown")) this.gameObject.y += this.speed;
    }
}