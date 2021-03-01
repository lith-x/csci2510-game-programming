import { UpdateComponent } from "../../engine";

export class RectMoveComponent extends UpdateComponent {
    update() {
        this.gameObject.x++;
        this.gameObject.y++;
    }
}
