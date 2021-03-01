import { SceneManager } from "./SceneManager";
import { Vector2 } from "./Vector2";

const INPUT_DEBUG = false;

export class Input {
    static keys: KeyDict = {};
    static keysDown: KeyDict = {};
    static keysUp: KeyDict = {};
    static frameKeysDown: KeyDict = {};
    static frameKeysUp: KeyDict = {};

    static mouseButtons: MouseDict = {};
    static mouseButtonsDown: MouseDict = {};
    static mouseButtonsUp: MouseDict = {};
    static frameMouseButtonsDown: MouseDict = {};
    static frameMouseButtonsUp: MouseDict = {};

    static mousePosition = new Vector2();
    static frameMousePosition: Vector2;
    static lastFrameMousePosition: Vector2;

    static scrollWheel = 0;
    static frameScrollWheel = 0;
    static mouseScrollDelta: number;

    static SwapArrays() {
        Input.frameKeysDown = Input.keysDown;
        Input.frameKeysUp = Input.keysUp;
        Input.keysDown = {};
        Input.keysUp = {};

        Input.frameMouseButtonsDown = Input.mouseButtonsDown;
        Input.frameMouseButtonsUp = Input.mouseButtonsUp;
        Input.mouseButtonsDown = {};
        Input.mouseButtonsUp = {};

        Input.lastFrameMousePosition = Input.frameMousePosition
        Input.frameMousePosition = new Vector2(Input.mousePosition);

        Input.frameScrollWheel = Input.scrollWheel;
        Input.scrollWheel = 0;

        const c = SceneManager.current;
        c.callMethod("onKeyDown", Input.frameKeysDown);
        c.callMethod("onKeyUp", Input.frameKeysUp);

        c.callMethod("onMouseButtonDown", Input.frameMouseButtonsDown);
        c.callMethod("onMouseButtonUp", Input.frameMouseButtonsUp);
        if (Input.frameMousePosition && Input.lastFrameMousePosition && !Input.lastFrameMousePosition.equals(Input.frameMousePosition))
            c.callMethod("onMouseMove", Input.frameMousePosition);
        c.callMethod("onScrollWheel", Input.frameScrollWheel);
    }

    static getKey(key: string) {
        return Input.keys[key];
    }

    static getKeyDown(key: string) {
        return Input.frameKeysDown[key];
    }

    static getKeyUp(key: string) {
        return Input.frameKeysUp[key];
    }

    static getMouseButton(button: number) {
        return Input.mouseButtons[button];
    }

    static getMouseButtonDown(button: number) {
        return Input.frameMouseButtonsDown[button];
    }

    static getMouseButtonUp(button: number) {
        return Input.frameMouseButtonsUp[button];
    }

    static getScrollWheel() {
        return Input.frameScrollWheel;
    }

    static getMousePosition() {
        return Input.frameMousePosition;
    }

    static getMousePositionDelta() {
        return Vector2.minus(Input.frameMousePosition, Input.lastFrameMousePosition);
    }

    static attach(document: Document) {
        const keydown = (event: KeyboardEvent) => {
            if (INPUT_DEBUG)
                console.log(`Down: ${event.key}`);

            if (Input.keys[event.key] != true)
                Input.keysDown[event.key] = true;
            Input.keys[event.key] = true;
        };

        const keyup = (event: KeyboardEvent) => {
            if (INPUT_DEBUG)
                console.log(`Up: ${event.key}`);

            if (Input.keys[event.key] != false)
                Input.keysUp[event.key] = true;
            Input.keys[event.key] = false;
        };

        const mousedown = (event: MouseEvent) => {
            if (INPUT_DEBUG)
                console.log(`Mouse Down: ${event.button}`);

            if (Input.mouseButtons[event.button] != true)
                Input.mouseButtonsDown[event.button] = true;
            Input.mouseButtons[event.button] = true;
        };

        const mouseup = (event: MouseEvent) => {
            if (INPUT_DEBUG)
                console.log(`Mouse Up: ${event.button}`);

            if (Input.mouseButtons[event.button] != false)
                Input.mouseButtonsUp[event.button] = true;
            Input.mouseButtons[event.button] = false;
        };

        const mousemove = (event: MouseEvent) => {
            if (INPUT_DEBUG)
                console.log(`Mouse Move: ${event.clientX}, ${event.clientY}`);

            Input.mousePosition.x = event.clientX;
            Input.mousePosition.y = event.clientY;
        };

        const wheelevent = (event: WheelEvent) => {
            if (INPUT_DEBUG)
                console.log(`Scroll Delta: ${event.deltaY}`);

            if (event.deltaY != 0)
                Input.mouseScrollDelta = event.deltaY;
        };

        const keypress = (event: KeyboardEvent) => {
            if (INPUT_DEBUG)
                console.log(`Keys: ${event.key}, Modifier keys: Control: ${event.ctrlKey}, Alt: ${event.altKey}, Shift: ${event.shiftKey}, Meta Key: ${event.metaKey}`);
        };

        // Based on https://stackoverflow.com/a/18289655
        // Kills the right mouse context menu
        const contextmenu = (event: MouseEvent) => {
            if (event.preventDefault != undefined)
                event.preventDefault();
            if (event.stopPropagation != undefined)
                event.stopPropagation();
        };

        document.body.addEventListener('keydown', keydown);
        document.body.addEventListener('keyup', keyup);
        document.body.addEventListener('keypress', keypress);
        document.body.addEventListener('mousedown', mousedown);
        document.body.addEventListener('mouseup', mouseup);
        document.body.addEventListener('mousemove', mousemove);
        document.body.addEventListener('wheel', wheelevent);
        document.body.addEventListener('contextmenu', contextmenu);
    }
}
