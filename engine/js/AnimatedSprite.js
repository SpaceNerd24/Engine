class AnimatedSprite {
    constructor(imageUrls, width, height, posX, posY, id, animationSpeed) {
        this.imageUrls = imageUrls; // Array of image URLs for animation frames
        this.currentFrame = 0; // Index of the current frame
        this.frameCount = imageUrls.length; // Total number of frames
        this.image = new Image();
        this.image.src = imageUrls[0]; // Set initial image
        this.width = width;
        this.height = height;
        this.posX = posX;
        this.posY = posY;
        this.id = id;
        this.animationSpeed = animationSpeed || 100; // Milliseconds per frame (adjust as needed)
        this.lastFrameTime = performance.now(); // Timestamp of the last frame
    }

    updateFrame() {
        const currentTime = performance.now();
        if (currentTime - this.lastFrameTime >= this.animationSpeed) {
            this.currentFrame = (this.currentFrame + 1) % this.frameCount;
            this.image.src = this.imageUrls[this.currentFrame];
            this.lastFrameTime = currentTime;
        }
    }

    draw(ctx) {
        this.updateFrame(); // Update the current frame
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
