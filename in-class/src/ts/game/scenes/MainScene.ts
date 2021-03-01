export const MainScene: SceneProps = {
    name: "MainScene",
    children: [
        {
            gameObject: "KeyboardRectangle",
            x: 300,
            y: 300
        },
        {
            gameObject: "KeyboardBumpRectangle",
            x: 50,
            y: 300
        },
        {
            gameObject: "ClickToDestroy",
            x: 0,
            y: 0
        },
        {
            gameObject: {
                name: "ScreenText",
                components: [
                    {
                        name: "ScreenTextComponent",
                        args: ["Main Scene"]
                    }
                ]
            },
            x: 400,
            y: 40
        },
        {
            gameObject: {
                name: "MainController",
                components: [
                    {
                        name: "ScreenTextComponent",
                        args: ["0"]
                    },
                    {
                        name: "MoleMakerComponent",
                    },
                    {
                        name: "ScoreComponent",
                    }
                ]
            },
            x: 20,
            y: 40
        }
    ]
};
