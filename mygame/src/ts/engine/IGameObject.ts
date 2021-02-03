export default interface IGameObject {
    draw(ctx: CanvasRenderingContext2D): void;
    update(): void;
}
