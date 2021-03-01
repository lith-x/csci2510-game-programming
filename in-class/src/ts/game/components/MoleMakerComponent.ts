import { ScreenTextComponent, SceneManager, UpdateComponent } from "../../engine";
import { ScoreComponent } from "./ScoreComponent";

export class MoleMakerComponent extends UpdateComponent {
    private tick = 0;

    update() {
        const score = (<ScoreComponent>this.gameObject.getComponent("ScoreComponent")).score;
        const textComponent = <ScreenTextComponent>this.gameObject.getComponent("ScreenTextComponent");
        textComponent.string = score.toString();

        if (!SceneManager.current.getGameObject("ClickToDestroy")) {
            this.tick++;
        }
        if (this.tick > 100) {
            console.log("Add another");
            SceneManager.current.instantiate({ gameObject: "ClickToDestroy" });
            this.tick = 0;
        }
    }
}