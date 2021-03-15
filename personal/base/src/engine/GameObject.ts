import { Component } from "./Component";
import { ResourceManager } from "./ResourceManager";
import { Vector2 } from "./Vector2";

export class GameObject {
    static deserialize(definition: ChildProps) {
        if ((definition as PrefabProps).prefab) {
            const prefab = ResourceManager.getPrefab((definition as PrefabProps).prefab);
            prefab.x = definition.x ?? 0;
            prefab.y = definition.y ?? 0;
            if (!prefab.children) prefab.children = [];
            prefab.children.push(...definition.children || []);
            return GameObject.deserialize(prefab);
        }

        const godef = definition as GameObjectProps;
        const obj = new GameObject(godef.gameobject);
        obj.position.x = godef.x ?? 0;
        obj.position.y = godef.y ?? 0;

        if (godef.components)
            for (const compDef of godef.components) {
                const comp = ResourceManager.getComponent(compDef.component);
                obj.components.push(new comp(obj, ...compDef.args || []));
            }

        if (godef.children)
            for (const childDef of godef.children)
                obj.children.push(GameObject.deserialize(childDef));
    }

    public components: Component[];
    public children: GameObject[];
    public position: Vector2;

    constructor(public readonly name: string) { }

    callFn(name: string, ...args: any[]) {
        for (const comp of this.components) {
            let func = comp[name];
            if (func && typeof func === "function")
                func(...args);
        }

        for (const child of this.children) {
            child.callFn(name, ...args);
        }
    }
}
