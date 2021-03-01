export const FirstScene: SceneProps = {
    name: "FirstScene",
    children: [
        {
            gameObject: "BlueRectangle",
            x: 300,
            y: 300
        },
        {
            gameObject: {
                name: "GreenRectangle",
                components: [
                    {
                        name: "DrawComponent",
                        args: ["green"]
                    },
                    {
                        name: "MoveComponent"
                    }
                ]
            },
            x: 200,
            y: 400
        },
        {
            gameObject: {
                name: "EmptyChangeScene",
                components: [
                    {
                        name: "ChangeSceneComponent"
                    }
                ]
            }
        }
    ]
};
