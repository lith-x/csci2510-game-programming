import IGameObject from "./IGameObject";

export default class Scene implements IGameObject {
    public children: IGameObject[] = [];

    draw(ctx: CanvasRenderingContext2D) {
        this.children.forEach(child => child.draw(ctx));
    }

    update() {
        this.children.forEach(child => child.update());
    }
}