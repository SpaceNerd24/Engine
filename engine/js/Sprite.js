class Sprite {
    constructor(imageUrl, width, height, posX, posY) {
        this.image = new Image();
        this.image.src = imageUrl;
        this.width = width;
        this.height = height;
        this.posX = posX;
        this.posY = posY;
    }

    draw(ctx) {
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
}