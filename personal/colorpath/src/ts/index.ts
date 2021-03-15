import { SceneManager } from "./engine";
import { AllComponents } from "./game/components";
import { AllPrefabs } from "./game/prefabs";
import { AllScenes } from "./game/scenes";

const clearScreen = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};

const gameLoop = (ctx: CanvasRenderingContext2D) => {
    clearScreen(ctx);
    SceneManager.current.draw(ctx);
    SceneManager.current.update();
}

const main = () => {
    const cvs = document.querySelector("canvas");
    const ctx = cvs.getContext("2d");

    SceneManager.addComponent(...AllComponents);
    SceneManager.addPrefab(...AllPrefabs);
    SceneManager.addScene(...AllScenes);
    SceneManager.changeScene("FirstScene");

    setInterval(gameLoop, 1000 / 144, ctx);
};

main();
