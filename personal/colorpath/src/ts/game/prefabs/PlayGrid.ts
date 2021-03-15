const COL_NUM = 5;
const ROW_NUM = 5;

const playsquares: GameObjectProps[] = [];

export const PlayGrid: GameObjectProps = {
    name: "PlayGrid",
    components: [
        { name: "DrawRectComponent" }
    ],
    children: [
        {
            gameObject: "PlaySquare",
            
        }
    ]
};