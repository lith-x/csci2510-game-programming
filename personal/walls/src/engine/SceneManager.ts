import { Component } from "./Component";
import { Scene } from "./Scene";
import { GameObjectProps, SceneProps } from "./Types";

export class SceneManager {
    // prevent public setting
    private static _current: Scene;
    public static get current() { return this._current; }

    static allComponents: (typeof Component)[] = [];
    static allPrefabs: GameObjectProps[] = [];
    static allScenes: SceneProps[] = [];

    static changeScene(name: string) {
        if (this.current && name == this.current.name) 
            return console.warn(`Attempted to change scene ${name} to itself.`);

        const proposedSceneProps = this.getScene(name);
        this._current = Scene.deserialize(proposedSceneProps);
    }

    static getComponent(name: string) {
        const comp = this.allComponents.find(c => c.name == name);
        if (!comp) throw new Error(`Couldn't find component: ${name}`);
        return comp;
    }

    static getPrefab(name: string) {
        const pref = this.allPrefabs.find(p => p.name == name);
        if (!pref) throw new Error(`Couldn't find prefab: ${name}`);
        return pref;
    }

    static getScene(name: string) {
        const scene = this.allScenes.find(s => s.name == name);
        if (!scene) throw new Error(`Couldn't find scene: ${name}`);
        return scene;
    }

    static addComponent(...comps: (typeof Component)[]) {
        this.allComponents.push(...comps);
    }

    static addPrefab(...prefabs: GameObjectProps[]) {
        this.allPrefabs.push(...prefabs);
    }

    static addScene(...scenes: SceneProps[]) {
        this.allScenes.push(...scenes);
    }
}
