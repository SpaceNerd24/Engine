class InputManager {
    constructor() {
        this.keyBindings = {};
        this.keysPressed = {};

        document.addEventListener("keydown", this.handleKeyDown.bind(this));
        document.addEventListener("keyup", this.handleKeyUp.bind(this));
    }

    bindKey(key, action) {
        if (key.toLowerCase() === "space") {
            alert("Error Code 1");
            return;
        }
        this.keyBindings[key.toLowerCase()] = action;
    }

    handleKeyDown(event) {
        const key = event.key.toLowerCase();
        this.keysPressed[key] = true;
        if (this.keyBindings[key]) {
            consoleLog(`Key ${key} pressed, performing action: ${this.keyBindings[key]}`);
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
}
