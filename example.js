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

    let fps = 0;
    const times = [];


    const Player = new Sprite("assets/images/Player-4.png", 32, 32, 125, 60, 'Player');

    spriteManager.addSprite(Player);
    
    const CameraTest = new Camera(spriteManager, textManager, inputManager, false, movementSpeed, Player);

    collisionManager.addEntity(Player);
        
    textManager.addText('Hello World', 100, 50, 20, "helloworld");
    textManager.addText('FPS: ' + fps, 100, 100, 20, "fps");

    audioManager.loadSoundEffect('assets/sounds/WinError.mp3');
    audioManager.loadSoundEffect('assets/sounds/android-notif.mp3');

    inputManager.bindKey('q', () => {
        let newSprite = new Sprite('assets/images/CollisionTest.png', 32 , 32, 50, 50, 'Collision');
        spriteManager.addSprite(newSprite);
        collisionManager.addEntity(newSprite);
    })

    function gameLoop() {
        const now = performance.now();

        while (times.length > 0 && times[0] <= now - 1000) {
            times.shift();
        }
        times.push(now);

        fps = times.length;

        textManager.changeText("fps", "FPS: " + fps);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        textManager.drawText(ctx);

        spriteManager.drawAll(ctx);
        
        particleManager.updateParticles(dt);
        particleManager.renderParticles(ctx);

        collisionManager.checkAllCollisions();
        
        requestAnimationFrame(gameLoop);
    }

    gameLoop();
};