const devConsole = document.getElementById("console");
window.onload = function() {

    // Get the canvas element and its 2D rendering context
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    const inputManager = new InputManager();
    const collisionManager = new CollisionManager();
    let movementSpeed = 2;

    // Create a new sprite
    const sprite = new Sprite("assets/images/sprite.png", 32, 32, 100, 100, 'Player');
    const CollisionTest = new Sprite('assets/images/CollisionTest.png', 32 , 32, 100, 50, 'Collision Test');

    collisionManager.addEntity(sprite);
    collisionManager.addEntity(CollisionTest);

    inputManager.bindKey("p", () => {
        document.getElementById('id01').style.display='block'
    })

    inputManager.bindKey("w", () => {
        sprite.translate(0, -movementSpeed);
    });

    inputManager.bindKey("s", () => {
        sprite.translate(0, movementSpeed);
    });

    inputManager.bindKey("a", () => {
        sprite.translate(-movementSpeed, 0);
    })

    inputManager.bindKey("d", () => {
        sprite.translate(movementSpeed, 0);
    });

    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        sprite.draw(ctx);
        CollisionTest.draw(ctx);

        collisionManager.checkAllCollisions();

        requestAnimationFrame(gameLoop);
    }

    gameLoop();
};

function consoleLog(text) {
    devConsole.innerHTML += text + "<br>";
}
