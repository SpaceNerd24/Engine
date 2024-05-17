class CollisionManager {
    constructor() {
        this.entities = []; // Store all entities that need collision checks
    }

    addEntity(entity) {
        this.entities.push(entity);
    }

    checkAllCollisions() {
        for (let i = 0; i < this.entities.length; i++) {
            const entityA = this.entities[i];
            for (let j = i + 1; j < this.entities.length; j++) {
                const entityB = this.entities[j];
                if (this.isColliding(entityA, entityB)) {
                    consoleLog('Collision detected between entities:' + entityA.id + entityB.id);
                }
            }
        }
    }

    checkCollisions(sprite) {
        for (let i = 0; i < this.entities.length; i++) {
            const entityA = this.entities[i];
            if (this.isColliding(entityA, sprite) && entityA.id != sprite.id) {
                consoleLog(`Sprite ${sprite.id} is Colliding with ${entityA.id}`);
                return true; // Collision detected
            }
        }
        return false; // No collision detected
    }   


    isColliding(entityA, entityB) {
        const colliding =
            entityA.posX < entityB.posX + entityB.width &&
            entityA.posX + entityA.width > entityB.posX &&
            entityA.posY < entityB.posY + entityB.height &&
            entityA.posY + entityA.height > entityB.posY;

        return colliding;
    }
    
}