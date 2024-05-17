const devConsole = document.getElementById("console");
window.onload = function() {

    // Get the canvas element and its 2D rendering context
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    const inputManager = new InputManager();
    const collisionManager = new CollisionManager();
    let movementSpeed = 2;

    // Create a new sprite
    const player = new Sprite("assets/images/sprite.png", 32, 32, 100, 100, 'Player');
    const PlayerCollision = new Sprite('assets/images/CollisionTest.png', 16 , 16, 100, 100, 'PlayerCollision');
    const CollisionTest = new Sprite('assets/images/CollisionTest.png', 32 , 32, 100, 50, 'Collision Test');
    const CollisionTest2 = new Sprite('assets/images/CollisionTest.png', 32 , 32, 50, 100, 'Collision Test2');

    //collisionManager.addEntity(sprite);
    collisionManager.addEntity(PlayerCollision);
    collisionManager.addEntity(CollisionTest);
    collisionManager.addEntity(CollisionTest2);

    inputManager.bindKey("p", () => {
        document.getElementById('id01').style.display='block'
    })

    inputManager.bindKey("w", () => {
        player.translate(0, -movementSpeed);
    });

    inputManager.bindKey("s", () => {
        player.translate(0, movementSpeed);
    });

    inputManager.bindKey("a", () => {
        player.translate(-movementSpeed, 0);
    })

    inputManager.bindKey("d", () => {
        player.translate(movementSpeed, 0);
    });

    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        player.draw(ctx);
        CollisionTest.draw(ctx);
        CollisionTest2.draw(ctx);
        //PlayerCollision.draw(ctx);

        PlayerCollision.setPosition(player.posX + 8, player.posY + 8);

        collisionManager.checkAllCollisions();

        requestAnimationFrame(gameLoop);
    }

    gameLoop();
};

function consoleLog(text) {
    devConsole.innerHTML += text + "<br>";
}
