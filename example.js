// const devConsole = document.getElementById("console");
window.onload = function() {

    // Get the canvas element and its 2D rendering context
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    const inputManager = new InputManager();
    const collisionManager = new CollisionManager();
    const audioManager = new AudioManager();
    const textManager = new TextManager();
    const particleManager = new ParticleManager();
    const spriteManager = new SpriteManager();

    let movementSpeed = 1;
    let dt = 1;


    const CollisionTest = new Sprite('assets/images/CollisionTest.png', 32 , 32, 50, 50, 'Collision Test');
    const Player = new Sprite("assets/images/Player-4.png", 32, 32, 125, 60, 'Player');

    spriteManager.addSprite(Player);
    spriteManager.addSprite(CollisionTest);
    
    const CameraTest = new Camera(spriteManager, textManager, inputManager, false, movementSpeed, Player);

    collisionManager.addEntity(CollisionTest);
    collisionManager.addEntity(Player);
        
    textManager.addText('Hello World', 100, 50, 20);

    audioManager.loadSoundEffect('assets/sounds/WinError.mp3');
    audioManager.loadSoundEffect('assets/sounds/android-notif.mp3');

    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        spriteManager.drawAll(ctx);
        
        textManager.drawText(ctx);

        particleManager.updateParticles(dt);
        particleManager.renderParticles(ctx);

        collisionManager.checkAllCollisions();
        
        requestAnimationFrame(gameLoop);
    }

    gameLoop();
};