import { SceneManager, UpdateComponent } from "../../engine";

export class ChangeSceneComponent extends UpdateComponent {
    private tick = 0;

    update() {
        this.tick++;
        if (this.tick > 200) {
            if (SceneManager.current.name == "FirstScene")
                SceneManager.changeScene("SecondScene");
            else
                SceneManager.changeScene("FirstScene");
            this.tick = 0;
        }
    }
}
