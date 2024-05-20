const devConsole = document.getElementById("console");
window.onload = function() {

    // Get the canvas element and its 2D rendering context
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    const inputManager = new InputManager();
    const collisionManager = new CollisionManager();
    const audioManager = new AudioManager();
    let movementSpeed = 2;

    const spriteImageUrls = [
        "assets/images/Player-1.png",
        "assets/images/Player-2.png",
        "assets/images/Player-3.png",
        "assets/images/Player-4.png",
    ];

    // Create a new sprite
    const player = new Sprite("assets/images/sprite.png", 32, 32, 200, 100, 'Player');
    const CollisionTest = new Sprite('assets/images/CollisionTest.png', 32 , 32, 50, 50, 'Collision Test');
    const CollisionTest2 = new Sprite('assets/images/CollisionTest.png', 32 , 32, 50, 100, 'Collision Test 2');
    const AnimatedPlayer = new AnimatedSprite(spriteImageUrls, 32, 32, 150, 100, 'AnimatedPlayer', 100);

    collisionManager.addEntity(player);
    collisionManager.addEntity(CollisionTest);
    collisionManager.addEntity(CollisionTest2);
    collisionManager.addEntity(AnimatedPlayer);

    audioManager.loadSoundEffect('assets/sounds/WinError.mp3');
    audioManager.loadSoundEffect('assets/sounds/android-notif.mp3');

    inputManager.bindKey("p", () => {
        document.getElementById('id01').style.display='block'
    })

    inputManager.bindKey("w", () => {
        AnimatedPlayer.translate(0, -movementSpeed);
    });

    inputManager.bindKey("s", () => {
        AnimatedPlayer.translate(0, movementSpeed);
    });

    inputManager.bindKey("a", () => {
        AnimatedPlayer.translate(-movementSpeed, 0);
    })

    inputManager.bindKey("d", () => {
        AnimatedPlayer.translate(movementSpeed, 0);
    });

    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        player.draw(ctx);
        CollisionTest.draw(ctx);
        CollisionTest2.draw(ctx);
        AnimatedPlayer.draw(ctx);

        collisionManager.checkAllCollisions();

        requestAnimationFrame(gameLoop);
    }

    gameLoop();
};

function consoleLog(text) {
    devConsole.innerHTML += text + "<br>";
}
