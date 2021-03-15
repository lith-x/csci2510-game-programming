export { Component, DrawComponent, ScreenTextComponent, UpdateComponent } from "./Component";
export { GameObject } from "./GameObject";
export { Input } from "./Input";
export { Scene } from "./Scene";
export { SceneManager } from "./SceneManager";
export { Vector2 } from "./Vector2";

import { Component } from "./Component";
import { Input } from "./Input";
import { SceneManager } from "./SceneManager";
import { GameObjectProps, SceneProps } from "./Types";

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

export const initGame = (components: (typeof Component)[], prefabs: GameObjectProps[], scenes: SceneProps[], startScene: string) => {
    const cvs = document.querySelector("canvas");
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
    const ctx = cvs.getContext("2d");

    Input.attach(document);

    SceneManager.addComponent(...components);
    SceneManager.addPrefab(...prefabs);
    SceneManager.addScene(...scenes);
    SceneManager.changeScene(startScene);

    const deltaT = 1000 / 60;
    setInterval(gameLoop, deltaT, ctx);

};
