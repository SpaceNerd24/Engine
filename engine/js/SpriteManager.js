class SpriteManager {
    constructor() {
        this.sprites = [];
    }

    addSprite(sprite) {
        this.sprites.push(sprite);
    }

    removeSprite(id) {
        this.sprites = this.sprites.filter(sprite => sprite.id !== id);
    }

    drawAll(ctx) {
        this.sprites.forEach(sprite => {
            sprite.draw(ctx);
        });
    }

    clearAll() {
        this.sprites = [];
    }

    translateSprites(dx, dy) {
        this.sprites.forEach(sprite => {
            sprite.translate(dx, dy);
        });
    }
}
