import GameObject from "../engine/GameObject";
import RectMoveComponent from "./components/RectMoveComponent";
import RectDrawComponent from "./components/RectDrawComponent";

export default class Rectangle extends GameObject {
    constructor(color: string) {
        super();

        const moveComponent = new RectMoveComponent(this);
        this.components.push(moveComponent);

        const drawComponent = new RectDrawComponent(this, color);
        this.components.push(drawComponent);
    }
}
