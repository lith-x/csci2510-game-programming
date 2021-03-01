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