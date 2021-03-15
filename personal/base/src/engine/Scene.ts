import { GameObject } from "./GameObject";

export class Scene {
    static deserialize(definition: SceneProps) {
        const scene = new Scene(definition.scene);
        if (definition.children)
            for (const child of definition.children)
                scene.addChild(GameObject.deserialize(child));
        return scene;
    }

    private _children: GameObject[] = [];
    public get children() { return this._children; }

    constructor(public readonly name: string) { }

    addChild(child: GameObject) {
        this._children.push(child);
        child.callFn("onLaunch");
    }

    callMethod(name: string, ...args: any[]) {
        for (const child of this.children)
            child.callFn(name, ...args);
    }

    update() {
        this.callMethod("update");
    }

    draw(ctx: CanvasRenderingContext2D) {
        this.callMethod("draw", ctx);
    }
}
