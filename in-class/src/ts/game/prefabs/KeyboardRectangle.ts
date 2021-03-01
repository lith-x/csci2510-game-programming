export const KeyboardRectangle: GameObjectProps = {
    name: "KeyboardRectangle",
    components: [
        {
            name: "RectDrawComponent",
            args: ["yellow"]
        },
        {
            name: "KeyboardMoveComponent",
            args: [2]
        }
    ]
};
