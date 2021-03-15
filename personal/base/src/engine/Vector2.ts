export class Vector2 {
    public get length() { return Math.sqrt(this.x * this.x + this.y * this.y); }

    constructor(public x = 0, public y = 0) { }

    plus(v: Vector2) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }
    static plus(v1: Vector2, v2: Vector2) {
        return v1.clone().plus(v2);
    }

    minus(v: Vector2) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }
    static minus(v1: Vector2, v2: Vector2) {
        return v1.clone().minus(v2);
    }

    normalize() {
        const l = this.length;
        this.x /= l;
        this.y /= l;
        return this;
    }
    static normalize(v: Vector2) {
        return v.clone().normalize();
    }

    scale(s: number) {
        this.x *= s;
        this.y *= s;
        return this;
    }
    static scale(v: Vector2, s: number) {
        return v.clone().scale(s);
    }

    clone() {
        return new Vector2(this.x, this.y);
    }
}