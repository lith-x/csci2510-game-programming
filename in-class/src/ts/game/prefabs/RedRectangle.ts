export const RedRectangle: GameObjectProps = {
    name: "RedRectangle",
    components: [
        {
            name: "RectMoveComponent"
        },
        {
            name: "RectDrawComponent",
            args: ["red"]
        }
    ]
};
