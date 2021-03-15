import { GameObject } from "./GameObject";
import { ChildProps, SceneProps } from "./Types";

export class Scene {
    static deserialize(definition: SceneProps) {
        const scene = new Scene();
        scene.name = definition.name;

        if (definition.children) // TODO: is this necessary?
            for (const child of definition.children)
                scene.addChild(Scene.deserializeChild(child));
        return scene;
    }

    static deserializeChild(definition: ChildProps) {
        const obj = GameObject.deserialize(definition.gameObject);
        obj.x = definition.x ?? 0;
        obj.y = definition.y ?? 0;

        if (definition.children)
            for (const childDef of definition.children)
                obj.children.push(Scene.deserializeChild(childDef));
        return obj;
    }


    public name: string;
    private _children: GameObject[] = [];
    public get children() { return this._children; }

    addChild(child: GameObject) {
        this._children.push(child);
        child.callMethod("start"); // TODO: Could potentially break here, left out "[]" as second arg.
    }

    draw(ctx: CanvasRenderingContext2D) {
        for (const child of this._children)
            child.draw(ctx);
    }

    update() {
        for (const child of this._children)
            child.update();
    }

    cullDestroyed() {
        this._children = this._children.filter(c => !c.markedDestroy);
    }

    getGameObject(name: string): GameObject | null {
        for (const child of this.children) {
            if (child.name == name) return child;
            const c = child.getGameObject(name);
            if (c) return c;
        }

        return null;
    }

    instantiate(props: ChildProps) {
        this.addChild(Scene.deserializeChild(props));
    }

    callMethod(method: string, ...args: any[]) {
        for (const child of this._children) {
            child.callMethod(method, ...args);
        }
    }
}
