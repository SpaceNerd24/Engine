const devConsole = document.getElementById("console");
window.onload = function() {

    // Get the canvas element and its 2D rendering context
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    const inputManager = new InputManager();

    // Create a new sprite
    const sprite = new Sprite("images/sprite.png", 32, 32, 100, 100);      

    inputManager.bindKey("p", () => {
        document.getElementById('id01').style.display='block'
    })

    inputManager.bindKey("w", () => {
        sprite.translate(0, -1);
    });

    inputManager.bindKey("s", () => {
        sprite.translate(0, 1);
    });

    inputManager.bindKey("a", () => {
        sprite.translate(-1, 0);
    })

    inputManager.bindKey("d", () => {
        sprite.translate(1, 0);
    });

    // Main game loop
    function gameLoop() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the sprite
        sprite.draw(ctx);

        // Request the next frame
        requestAnimationFrame(gameLoop);
    }

    // Start the game loop
    gameLoop();
};

function consoleLog(text) {
    devConsole.innerHTML += text + "<br>";
}
