import { Component } from "./Component";
import { Scene } from "./Scene";

export class ResourceManager {
    private static _current: Scene;
    public static get current() { return this._current; }

    static readonly Components: typeof Component[] = [];
    static readonly Prefabs: GameObjectProps[] = [];
    static readonly Scenes: SceneProps[] = [];

    static changeScene(name: string) {
        if (this.current && name == this.current.name)
            return console.warn(`Attempted to change scene ${name} to itself.`);

        const proposedSceneProps = this.getScene(name);
        this._current = Scene.deserialize(proposedSceneProps);
    }

    static getComponent(name: string) {
        const comp = this.Components.find(c => c.name == name);
        if (!comp) throw new Error(`Couldn't find component: ${name}`);
        return comp;
    }

    // the point where prefabs are transformed into game object properties
    static getPrefab(name: string) {
        const pref = this.Prefabs.find(p => p.gameobject == name);
        if (!pref) throw new Error(`Couldn't find prefab: ${name}`);
        return pref;
    }

    static getScene(name: string) {
        const scene = this.Scenes.find(s => s.scene == name);
        if (!scene) throw new Error(`Couldn't find scene: ${name}`);
        return scene;
    }

    static addComponent(...comps: (typeof Component)[]) {
        this.Components.push(...comps);
    }

    static addPrefab(...prefabs: GameObjectProps[]) {
        this.Prefabs.push(...prefabs);
    }

    static addScene(...scenes: SceneProps[]) {
        this.Scenes.push(...scenes);
    }
}
