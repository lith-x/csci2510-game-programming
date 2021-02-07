import GameObject from "../../engine/GameObject";
import UpdateComponent from "../../engine/UpdateComponent";

export default class MoveComponent extends UpdateComponent {
    protected gameObject: GameObject;
    constructor(shape: GameObject) {
        super(shape);
    }

    update() {
        this.gameObject.x++;
        this.gameObject.y++;
    }
}
