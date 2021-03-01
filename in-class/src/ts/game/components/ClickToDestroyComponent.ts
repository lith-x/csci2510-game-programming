import { GameObject, Input, SceneManager, UpdateComponent } from "../../engine";
import { ScoreComponent } from "./ScoreComponent";

export class ClickToDestroyComponent extends UpdateComponent {
    public speed: number;

    constructor(gameObject: GameObject, speed = 1) {
        super(gameObject);
        this.speed = speed;
    }

    start() {
        console.log("Called start() on ClickToDestroyComponent.");
    }

    update() {
        if (Input.getMouseButtonDown(0)) {
            const mousePos = Input.getMousePosition();
            if (mousePos.x < 100 && mousePos.y < 200) {
                this.gameObject.destroy();
                const scoreComp = <ScoreComponent>SceneManager.current.getGameObject("MainController").getComponent("ScoreComponent");
                scoreComp.score++;
            }
        }
    }
}
