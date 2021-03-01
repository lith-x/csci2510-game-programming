export class Vector2 {
    public x = 0;
    public y = 0;

    public get length() { return Math.sqrt(this.x * this.x + this.y * this.y); }

    constructor(one?: Vector2 | [x: number, y: number] | number, two?: number) {
        if (!one) return;

        if (!two) {
            if (Array.isArray(one)) {
                this.x = one[0];
                this.y = one[1];
            }
            else if (one instanceof Vector2) {
                this.x = one.x;
                this.y = one.y;
            } else {
                this.x = one as number;
                this.y = one as number;
            }
            return;
        }

        this.x = one as number;
        this.y = two;
    }

    plus(other: Vector2) {
        this.x += other.x;
        this.y += other.y;
    }

    minus(other: Vector2) {
        this.x -= other.x;
        this.y -= other.y;
    }

    scale(scalar: number) {
        this.x *= scalar;
        this.y *= scalar;
    }

    normalize() {
        const length = this.length;
        this.x /= length;
        this.y /= length;
    }

    equals(other: Vector2) {
        return this.x == other.x && this.y == other.y;
    }

    static plus(one: Vector2, two: Vector2) {
        const v = new Vector2(one);
        v.plus(two);
        return v;
    }

    static minus(one: Vector2, two: Vector2) {
        const v = new Vector2(one);
        v.minus(two);
        return v;
    }

    static scale(one: Vector2, scalar: number) {
        const v = new Vector2(one);
        v.scale(scalar);
        return v;
    }

    static normalize(one: Vector2) {
        const v = new Vector2(one);
        v.normalize();
        return v;
    }
}
