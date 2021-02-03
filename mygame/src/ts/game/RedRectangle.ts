import Rectangle from "../engine/Rectangle";
import chroma from "chroma-js";

export default class RedRectangle extends Rectangle {
    constructor() {
        super(20, 20, 50, 50);
        this.color = chroma("red");
    }

    update() {
        this.x++;
        this.y++;
    }
}