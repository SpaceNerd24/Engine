class Camera {
    constructor(spriteManager, textManager, inputManager, FreeCam, movementSpeed, target) {
        this.spriteManager = spriteManager;
        this.textManager = textManager;
        this.inputManager = inputManager;
        this.movementSpeed = movementSpeed;
        this.FreeCam = FreeCam;
        this.hasTarget = false;
        this.target;

        if (target != null) {
            this.hasTarget = true;
            this.target = target;
            
            this.spriteManager.removeSpriteFromTranslation(this.target.id);

            consoleLog("Camera target is set to: " + this.target.id);

            this.inputManager.bindKey("s", () => {
                this.spriteManager.translateSprites(0, -movementSpeed);
                this.textManager.translateText(0, -movementSpeed);
            });
        
            this.inputManager.bindKey("w", () => {
                this.spriteManager.translateSprites(0, movementSpeed);
                this.textManager.translateText(0, movementSpeed);
            });
        
            this.inputManager.bindKey("d", () => {
                this.spriteManager.translateSprites(-movementSpeed, 0);
                this.textManager.translateText(-movementSpeed, 0);
            })
        
            this.inputManager.bindKey("a", () => {
                this.spriteManager.translateSprites(movementSpeed, 0);
                this.textManager.translateText(movementSpeed, 0);
            });
        }

        if (this.FreeCam) {
            consoleLog("Freecam is Enabled");
            this.inputManager.bindKey("s", () => {
                this.spriteManager.translateSprites(0, -movementSpeed);
                this.textManager.translateText(0, -movementSpeed);
            });
        
            this.inputManager.bindKey("w", () => {
                this.spriteManager.translateSprites(0, movementSpeed);
                this.textManager.translateText(0, movementSpeed);
            });
        
            this.inputManager.bindKey("d", () => {
                this.spriteManager.translateSprites(-movementSpeed, 0);
                this.textManager.translateText(-movementSpeed, 0);
            })
        
            this.inputManager.bindKey("a", () => {
                this.spriteManager.translateSprites(movementSpeed, 0);
                this.textManager.translateText(movementSpeed, 0);
            });
        }
    }
}