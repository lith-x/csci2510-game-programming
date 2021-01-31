import Rectangle from "./objects/Rectangle";
import Circle from "./objects/Circle";
import DrawLayer from "./objects/DrawLayer";

enum Layers {
    Background = 0,
    Midground,
    Foreground,
    GUI
}


const clearScreen = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};

const drawloop = (ctx: CanvasRenderingContext2D, layers: DrawLayer[]) => {
    layers.forEach(layer =>
        layer.drawables.forEach(drawable => 
            drawable.draw(ctx)
        )
    );
};


const main = () => {
    const cvs = document.querySelector("canvas");
    const ctx = cvs.getContext("2d");
    clearScreen(ctx);

    const layers: DrawLayer[] = [];
    layers.push(new DrawLayer());
    layers[Layers.Background].drawables.push(new Rectangle(150, 150, 150, 150));
    layers[Layers.Background].drawables.push(new Circle(300, 300, 100));
    layers[Layers.Background].drawables[1].color = layers[Layers.Background].drawables[1].color.brighten(2);
    layers[Layers.Background].drawables.push(new Rectangle(300, 300, 150, 150));

    drawloop(ctx, layers);
};

main();
