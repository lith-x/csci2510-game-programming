import { GameObject } from "./GameObject";

export class Component {
    constructor(protected gameObject: GameObject, ...args: any[]) { }
}
