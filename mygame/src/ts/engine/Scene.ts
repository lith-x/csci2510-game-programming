import { GameObject } from "./GameObject";

export class Scene {
    public name: string;
    public children: GameObject[] = [];

    update() {
        for (const child of this.children)
            child.update();
    }

    draw(ctx: CanvasRenderingContext2D) {
        for (const child of this.children)
            child.draw(ctx);
    }

    static deserialize(definition: SceneProps) {
        const scene = new Scene();
        scene.name = definition.name;
        
        if (definition.children)
            for (const child of definition.children)
                scene.children.push(this.deserializeChild(child));
        return scene;
    }

    static deserializeChild(definition: ChildProps) {
        const obj = GameObject.deserialize(definition.gameObject);
        obj.x = definition.x ?? 0;
        obj.y = definition.y ?? 0;

        if (definition.children)
            for (const childDef of definition.children)
                obj.children.push(this.deserializeChild(childDef));
        return obj;
    }
}
