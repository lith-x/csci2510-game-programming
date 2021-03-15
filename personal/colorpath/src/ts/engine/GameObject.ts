import { Component, DrawComponent, UpdateComponent } from "./Component";
import { Scene } from "./Scene";
import { SceneManager } from "./SceneManager";

export class GameObject {
    public name: string;
    public components: Component[] = [];
    public children: GameObject[] = [];
    public x = 0;
    public y = 0;

    update(): void {
        for (const component of this.components)
            if (component instanceof UpdateComponent)
                component.update();

        for (const child of this.children)
            child.update();
    }

    draw(ctx: CanvasRenderingContext2D): void {
        for (const component of this.components)
            if (component instanceof DrawComponent)
                component.draw(ctx);

        for (const child of this.children)
            child.draw(ctx);
    }

    static deserialize(definition: GameObjectProps | string): GameObject {
        if (typeof definition == "string") {
            const prefab = SceneManager.getPrefab(definition);
            return GameObject.deserialize(prefab);
        }

        const obj = new GameObject();
        obj.name = definition.name;

        if (definition.components)
            for (const compDef of definition.components)
                obj.addComponent(SceneManager.getComponent(compDef.name), ...(compDef.args ?? []));

        if (definition.children)
            for (const childDef of definition.children)
                obj.children.push(Scene.deserializeChild(childDef));

        return obj;
    }

    addComponent(component: typeof Component, ...args: any[]): void {
        this.components.push(new component(this, ...args));
    }
}
