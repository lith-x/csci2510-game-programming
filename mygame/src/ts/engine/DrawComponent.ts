import Component from "./Component";

export default abstract class DrawComponent extends Component {
    abstract draw(ctx: CanvasRenderingContext2D): void;
}
