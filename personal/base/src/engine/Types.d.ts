declare type ComponentProps = {
    component: string;
    args?: any[];
};

declare type GameObjectProps = {
    gameobject: string;
    components?: ComponentProps[];
    children?: ChildProps[];
    x?: number;
    y?: number;
};

declare type PrefabProps = {
    prefab: string;
    children?: ChildProps[];
    x?: number;
    y?: number;
}

declare type ChildProps = GameObjectProps | PrefabProps;

declare type SceneProps = {
    scene: string;
    children?: ChildProps[];
};
