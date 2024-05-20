class TextManager {
    constructor(canvasContext) {
        this.textObjects = [];
    }

    addText(text, xpos, ypos) {
        const textObj = { text, xpos, ypos};
        this.textObjects.push(textObj);
    }

    drawText(ctx) {
        for (const textObj of this.textObjects) {
            ctx.font = "24px Arial";
            ctx.fillStyle = "black";
            ctx.fillText(textObj.text, textObj.xpos, textObj.ypos);
        }
    }
}
