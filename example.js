// const devConsole = document.getElementById("console");
window.onload = function() {

    // Get the canvas element and its 2D rendering context
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    const inputManager = new InputManager();
    const collisionManager = new CollisionManager();
    const audioManager = new AudioManager();
    const textManager = new TextManager();
    let movementSpeed = 2;

    const CollisionTest = new Sprite('assets/images/CollisionTest.png', 32 , 32, 50, 50, 'Collision Test');
    const Player = new Sprite("assets/images/Player-4.png", 32, 32, 150, 100, 'Player');

    textManager.addText("Test Text", 100, 100, 25);

    collisionManager.addEntity(CollisionTest);
    collisionManager.addEntity(Player);

    audioManager.loadSoundEffect('assets/sounds/WinError.mp3');
    audioManager.loadSoundEffect('assets/sounds/android-notif.mp3');

    inputManager.bindKey("w", () => {
        Player.translate(0, -movementSpeed);
    });

    inputManager.bindKey("s", () => {
        Player.translate(0, movementSpeed);
    });

    inputManager.bindKey("a", () => {
        Player.translate(-movementSpeed, 0);
    })

    inputManager.bindKey("d", () => {
        Player.translate(movementSpeed, 0);
    });

    function gameLoop() {
        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        CollisionTest.draw(ctx);
        Player.draw(ctx);
        
        ctx.restore();

        textManager.drawText(ctx);
        
        collisionManager.checkAllCollisions();

        if (inputManager.isKeyUp("shift")) {
            movementSpeed = 2;
        }
        if (inputManager.isKeyPressed("shift")) {
            movementSpeed = 3;
        }
        
        requestAnimationFrame(gameLoop);
    }

    gameLoop();
};