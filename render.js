const { resulution, design, message } = require("./settings/settings.json");

class Render {
    displayMap;

    constructor() {
        this.displayMap = [];
        for (let i = 0; i < resulution.h; i++) {
            this.displayMap.push([]);
        }

        for (let i = 0; i < resulution.h; i++) {
            for (let j = 0; j < resulution.w; j++) {
                this.displayMap[i].push(design.bg);
            }
        }
    }

    draw(x, y, type = 1) {
        x--;
        y--;
        this.displayMap[y][x] =
            design[type] == undefined ? design[1] : design[type];
    }

    drawLn(x1, y1, x2, y2, type = 1) {
        let calc = (x2 - x1) / (y2 - y1);
        let distX = x2 - x1;
        let distY = y2 - y1;

        if (distX == 0) {
            for (let i = 0; i < distY; i++) {
                this.draw(x1, y1 + i, type);
            }
            this.draw(x2, y2, type);
            return;
        }

        for (let i = 0; i < distX; i++) {
            let yPlus = Math.round(i / calc);
            this.draw(x1 + i, y1 + yPlus, type);
        }

        this.draw(x2, y2, type);
    }

    drawRect(x1, y1, x2, y2, type = 1) {
        this.drawLn(x1, y1, x1, y2, type);
        this.drawLn(x1, y1, x2, y1, type);
        this.drawLn(x1, y2, x2, y2, type);
        this.drawLn(x2, y1, x2, y2, type);
    }

    clear() {
        for (let i = 0; i < resulution.h; i++) {
            for (let j = 0; j < resulution.w; j++) {
                this.displayMap[i].push(design.bg);
            }
        }
    }

    render() {
        console.clear();

        let displayString = "";

        this.displayMap.forEach((e) => {
            e.forEach((e) => {
                displayString += e;
            });
            displayString += "\n";
        });

        displayString += message.bottom;

        console.log(displayString);
    }
}

module.exports = Render;
