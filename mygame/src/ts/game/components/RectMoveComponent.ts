import UpdateComponent from "../../engine/UpdateComponent";

export default class RectMoveComponent extends UpdateComponent {
    update() {
        this.gameObject.x++;
        this.gameObject.y++;
    }
}
