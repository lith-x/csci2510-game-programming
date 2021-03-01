export const SecondScene: SceneProps = {
    name: "SecondScene",
    children: [
        {
            gameObject: "RedRectangle",
            x: 100,
            y: 500
        },
        {
            gameObject: {
                name: "ChangeSceneObject",
                components: [
                    {
                        name: "ChangeSceneComponent"
                    }
                ]
            }
        }
    ]
};
