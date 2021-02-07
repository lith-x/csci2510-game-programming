import GameObject from "./GameObject";

export default class Scene {
    public children: GameObject[] = [];

    update() {
        this.children.forEach(child => child.update());
    }

    draw(ctx: CanvasRenderingContext2D) {
        this.children.forEach(child => child.draw(ctx));
    }
}
