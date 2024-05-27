class SpriteManager {
    constructor() {
        this.sprites = [];
        this.removedSprites = [];
        this.noTranslationIDs = [];
    }

    addSprite(sprite) {
        if (!this.removedSprites.some(removedSprite => removedSprite.id === sprite.id)) {
            this.sprites.push(sprite);
            consoleLog("Added sprite " + sprite.id);
        } else {
            consoleLog("Sprite with ID " + sprite.id + " was removed and cannot be added again.");
        }
    }

    removeSprite(id) {
        const removedSprite = this.sprites.find(sprite => sprite.id === id);
        if (removedSprite) {
            this.removedSprites.push(removedSprite);
            this.sprites = this.sprites.filter(sprite => sprite.id !== id);
            consoleLog("Removed sprite " + id);
        } else {
            consoleLog("Sprite with ID " + id + " not found.");
        }
    }

    removeSpriteFromTranslation(id) {
        this.noTranslationIDs.push(id);
    }

    drawAll(ctx) {
        this.sprites.forEach(sprite => {
            sprite.draw(ctx);
        });
    }

    clearAll() {
        this.sprites = [];
        this.removedSprites = [];
    }

    translateSprites(dx, dy) {
        this.sprites.forEach(sprite => {
            this.noTranslationIDs.forEach(noTranslationID => {
                if (sprite.id !== noTranslationID) {
                    sprite.translate(dx, dy);
                }
            })
        });
    }
}
