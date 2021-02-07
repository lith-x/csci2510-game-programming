import FirstScene from "./game/FirstScene";
import Rectangle from "./game/Rectangle";


const clearScreen = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};


const main = () => {
    const cvs = document.querySelector("canvas");
    const ctx = cvs.getContext("2d");

    const firstScene = new FirstScene();
    const red = new Rectangle("red");
    firstScene.children.push(red);

    const red2 = new Rectangle("blue");
    red2.x += 100;
    red2.y += 100;
    firstScene.children.push(red2);

    const gameLoop = () => {
        clearScreen(ctx);
        firstScene.draw(ctx);
        firstScene.update();
    }

    setInterval(gameLoop, 1000 / 144);
};

main();
