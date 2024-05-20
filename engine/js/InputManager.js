class InputManager {
    constructor() {
        this.keyBindings = {};
        this.keysPressed = {};

        document.addEventListener("keydown", this.handleKeyDown.bind(this));
        document.addEventListener("keyup", this.handleKeyUp.bind(this));
    }

    bindKey(key, action) {
        if (key.toLowerCase() === "space") {
            consoleLog("Error Code 1");
            return;
        }
        if (key.toLowerCase() === "p") {
            consoleLog("Error Code 2");
            return;
        }
        if (key.toLowerCase() === "equals") {
            consoleLog("Error Code 3");
            return;
        }
        if (key.toLowerCase() === "minue") {
            consoleLog("Error Code 4");
            return;
        }
        if (key.toLowerCase() === "plus") {
            consoleLog("Error Code 5");
            return;
        }
        this.keyBindings[key.toLowerCase()] = action;
        consoleLog(`Key ${key} has been binded to: ${action}`);
    }

    handleKeyDown(event) {
        const key = event.key.toLowerCase();
        this.keysPressed[key] = true;
        if (this.keyBindings[key]) {
            //consoleLog(`Key ${key} pressed, performing action: ${this.keyBindings[key]}`);
            this.keyBindings[key]();
        }
    }

    handleKeyUp(event) {
        const key = event.key.toLowerCase();
        this.keysPressed[key] = false;
    }

    isKeyPressed(key) {
        return !!this.keysPressed[key.toLowerCase()];
    }

    
    isKeyUp(key) {
        return !this.keysPressed[key.toLowerCase()];
    }
}
