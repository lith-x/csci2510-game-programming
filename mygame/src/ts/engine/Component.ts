import GameObject from "./GameObject";

export default class Component {
    protected gameObject: GameObject;
    constructor(gameObject: GameObject) {
        this.gameObject = gameObject;
    }
}
