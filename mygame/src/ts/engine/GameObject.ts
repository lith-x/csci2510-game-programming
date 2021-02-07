import Component from "./Component";
import DrawComponent from "./DrawComponent";
import UpdateComponent from "./UpdateComponent";

export default abstract class GameObject {
    public components: Component[] = [];
    public x = 0;
    public y = 0;

    update() {
        this.components.forEach(c => {
            if (c instanceof UpdateComponent)
                c.update();
        });
    }

    draw(ctx: CanvasRenderingContext2D) {
        this.components.forEach(c => {
            if (c instanceof DrawComponent)
                c.draw(ctx);
        });
    }
}
