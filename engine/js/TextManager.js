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

    translateText(dx, dy) {
        this.textObjects.forEach(textObj => {
            textObj.xpos += dx;
            textObj.ypos += dy;
        });
    }
}