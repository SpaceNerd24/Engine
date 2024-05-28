class TextManager {
    constructor() {
        this.textObjects = [];
    }

    addText(text, xpos, ypos, fontSize, id) {
        const textObj = { text, xpos, ypos, fontSize, id };
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

    changeText(id, newText) {
        const textObj = this.textObjects.find(textObj => textObj.id === id);
        if (textObj) {
            textObj.text = newText;
        }
    }
}