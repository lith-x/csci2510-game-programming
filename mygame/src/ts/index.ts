import FirstScene from "./game/FirstScene";
import RedRectangle from "./game/RedRectangle";


const clearScreen = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};


const main = () => {
    const cvs = document.querySelector("canvas");
    const ctx = cvs.getContext("2d");

    const firstScene = new FirstScene();
    const red = new RedRectangle();
    firstScene.children.push(red);

    const red2 = new RedRectangle();
    red2.x += 100;
    red2.y += 100;
    firstScene.children.push(red2);

    const gameLoop = () => {
        clearScreen(ctx);
        firstScene.draw(ctx);
        firstScene.update();
    }

    setInterval(gameLoop, 144 / 1000);
};

main();
