/* The TextManager class manages text objects with properties such as text content, position, and font
size, and provides methods to add and draw text on a canvas context. */
class TextManager {
    constructor() {
        this.textObjects = [];
    }

    addText(text, xpos, ypos, fontSize) {
        const textObj = { text, xpos, ypos, fontSize };
        this.textObjects.push(textObj);
    }

    drawText(ctx) {
        for (const textObj of this.textObjects) {
            ctx.font = `${textObj.fontSize}px Arial`;
            ctx.fillStyle = "black";
            ctx.fillText(textObj.text, textObj.xpos, textObj.ypos);
        }
    }
}