export const KeyboardBumpRectangle: GameObjectProps = {
    name: "KeyboardBumpRectangle",
    components: [
        {
            name: "RectDrawComponent",
            args: ["white"]
        },
        {
            name: "KeyboardBumpComponent",
            args: [2]
        }
    ]
};
