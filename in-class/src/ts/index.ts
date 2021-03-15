import { Input, SceneManager } from "./engine";
import { AllComponents, AllPrefabs, AllScenes } from "./game";

const clearScreen = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};

const gameLoop = (ctx: CanvasRenderingContext2D) => {
    clearScreen(ctx);
    Input.SwapArrays();
    SceneManager.current.draw(ctx);
    SceneManager.current.update();
    SceneManager.current.cullDestroyed();
};

const main = () => {
    const cvs = document.querySelector("canvas");
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
    const ctx = cvs.getContext("2d");

    Input.attach(document);

    SceneManager.addComponent(...AllComponents);
    SceneManager.addPrefab(...AllPrefabs);
    SceneManager.addScene(...AllScenes);
    SceneManager.changeScene("MainScene");

    const deltaT = 1000 / 60;
    setInterval(gameLoop, deltaT, ctx);
};

window.addEventListener("load", main);