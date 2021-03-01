export const BlueRectangle: GameObjectProps = {
    name: "BlueRectangle",
    components: [
        {
            name: "RectMoveComponent"
        },
        {
            name: "RectDrawComponent",
            args: ["blue"]
        }
    ]
};
