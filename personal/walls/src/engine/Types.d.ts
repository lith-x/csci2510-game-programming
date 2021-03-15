import { Component } from "./Component";

declare type GameObjectProps = {
    name: string;
    components?: {
        name: string;
        args?: any[];
    }[];
    children?: ChildProps[];
};

declare type ChildProps = {
    gameObject: string | GameObjectProps;
    children?: ChildProps[];
    x?: number;
    y?: number;
}

declare type SceneProps = {
    name: string,
    children?: ChildProps[];
};

declare type KeyDict = {
    [val: string]: boolean;
};

declare type MouseDict = {
    [val: number]: boolean;
};

declare type GameInitOpts = {
    width?: number;
    height?: number;
    startScene?: string;
    components?: (typeof Component)[];
    prefabs?: GameObjectProps[];
    scenes?: SceneProps[];
}