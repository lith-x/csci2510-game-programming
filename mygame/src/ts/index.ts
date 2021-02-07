import FirstScene from "./game/FirstScene";
import Rectangle from "./game/Rectangle";

const clearScreen = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};

const main = () => {
    const cvs = document.querySelector("canvas");
    const ctx = cvs.getContext("2d");

    const firstScene = new FirstScene();
    const red = new Rectangle("red");
    firstScene.children.push(red);

    const blue = new Rectangle("blue");
    blue.x += 100;
    blue.y += 100;
    firstScene.children.push(blue);

    const gameLoop = () => {
        clearScreen(ctx);
        firstScene.draw(ctx);
        firstScene.update();
    }

    setInterval(gameLoop, 1000 / 144);
};

main();
