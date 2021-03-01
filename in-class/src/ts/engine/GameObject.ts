import { Component, DrawComponent, UpdateComponent } from "./Component";
import { Scene } from "./Scene";
import { SceneManager } from "./SceneManager";

export class GameObject {
    static deserialize(definition: GameObjectProps | string): GameObject {
        if (typeof definition == "string") {
            const prefab = SceneManager.getPrefab(definition);
            return GameObject.deserialize(prefab);
        }

        const obj = new GameObject();
        obj.name = definition.name;

        if (definition.components)
            for (const compDef of definition.components) {
                const comp = SceneManager.getComponent(compDef.name);
                obj.components.push(new comp(obj, ...(compDef.args ?? [])));
            }

        if (definition.children)
            for (const childDef of definition.children)
                obj.children.push(Scene.deserializeChild(childDef));

        return obj;
    }


    public name: string;
    public components: Component[] = [];
    public children: GameObject[] = [];
    public x = 0;
    public y = 0;
    public markedDestroy = false;

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

    destroy() {
        this.markedDestroy = true;
    }

    getGameObject(name: string): GameObject | null {
        for (const child of this.children) {
            if (child.name == name) return child;
            const c = child.getGameObject(name);
            if (c) return c;
        }
        return null;
    }

    getComponent(name: string): Component | null {
        for (const comp of this.components) {
            if (comp.constructor.name == name)
                return comp;
        }

        for (const child of this.children) {
            const comp = child.getComponent(name);
            if (comp) return comp;
        }

        return null;
    }

    callMethod(name: string, ...args: any[]) {
        for (const comp of this.components) {
            if (comp[name])
                comp[name](...args);
        }

        for (const child of this.children) {
            child.callMethod(name, ...args);
        }
    }
}
