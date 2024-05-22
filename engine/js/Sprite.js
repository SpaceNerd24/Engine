/* The Sprite class in JavaScript represents an image element with properties for position, size, and
methods for drawing and transforming. */
class Sprite {
    constructor(imageUrl, width, height, posX, posY, id) {
        this.image = new Image();
        this.image.src = imageUrl;
        this.width = width;
        this.height = height;
        this.posX = posX;
        this.posY = posY;
        this.id = id;
    }

    draw(ctx) {
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }

    setPosition(x, y) {
        this.posX = x;
        this.posY = y;
    }

    translate(x, y) {
        this.posX += x;
        this.posY += y;
    }

    setScale(scale) {
        this.width *= scale;
        this.height *= scale;
    }
}