import GameObject from "../engine/GameObject";
import MoveComponent from "./components/MoveComponent";
import RectDrawComponent from "./components/RectDrawComponent";

export default class Rectangle extends GameObject {
    constructor(color: string) {
        super();
        
        const moveComponent = new MoveComponent(this);
        this.components.push(moveComponent);
        
        const rectComponent = new RectDrawComponent(this, color);
        this.components.push(rectComponent);
    }
}