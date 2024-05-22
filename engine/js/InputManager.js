/* The InputManager class in JavaScript handles key bindings, key events, and mouse coordinates for
user input. */
class InputManager {
    constructor() {
        this.keyBindings = {};
        this.keysPressed = {};

        document.addEventListener("keydown", this.handleKeyDown.bind(this));
        document.addEventListener("keyup", this.handleKeyUp.bind(this));
    }

    bindKey(key, action) {
        /* This code checks if the key being bound is one of the specified keys
        ("space", "p", "equals", "minue", "plus") and if so, it logs an error message with a
        corresponding error code and then returns from the function without binding the key. */
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
            this.keyBindings[key]();
        }
    }

    handleKeyUp(event) {
        const key = event.key.toLowerCase();
        this.keysPressed[key] = false;
    }

    /* These two methods in the `InputManager` class are used to check the status of a specific key in the
    `keysPressed` object. */
    isKeyPressed(key) {
        return !!this.keysPressed[key.toLowerCase()];
    }

    
    isKeyUp(key) {
        return !this.keysPressed[key.toLowerCase()];
    }

    getMouseX(canvas, evt) {
        const rect = canvas.getBoundingClientRect();
        return evt.clientX - rect.left;
    }
    
    getMouseY(canvas, evt) {
        const rect = canvas.getBoundingClientRect();
        return evt.clientY - rect.top;
    }
}
