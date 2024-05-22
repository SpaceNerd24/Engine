/* The `AnimatedSprite` class represents a sprite with multiple animation frames that can be updated
and drawn on a canvas. */
class AnimatedSprite {
    /**
     * The constructor function initializes an object for animating images with specified properties
     * such as image URLs, dimensions, position, and animation speed.
     * @param imageUrls - The `imageUrls` parameter is an array of image URLs that represent the
     * animation frames for the object. Each URL in the array points to an image that will be displayed
     * as a frame in the animation sequence.
     * @param width - The `width` parameter in the constructor represents the width of the image or
     * element that will be displayed on the screen. It determines how wide the visual representation
     * of the object will be in pixels.
     * @param height - The `height` parameter in the constructor function represents the height of the
     * image or element that will be displayed on the screen. It is used to set the height of the image
     * or element when rendering it in the specified position (`posX`, `posY`) on the screen.
     * @param posX - The `posX` parameter in the constructor function represents the x-coordinate
     * position of the object on the screen or canvas. It specifies the horizontal position where the
     * object will be rendered.
     * @param posY - The `posY` parameter in the constructor represents the vertical position of the
     * object on the screen. It specifies the Y-coordinate of the top-left corner of the object within
     * the game or application window. This parameter helps in positioning and rendering the object at
     * the desired location on the screen.
     * @param id - The `id` parameter in the constructor represents the unique identifier or name
     * associated with the object or element being created. It can be used to distinguish this
     * particular instance from others, especially when working with multiple objects or elements in a
     * program.
     * @param animationSpeed - The `animationSpeed` parameter in the constructor represents the
     * duration in milliseconds for each frame of the animation. It determines how quickly the frames
     * of the animation will be displayed. You can adjust this value based on how fast or slow you want
     * the animation to appear.
     */
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
