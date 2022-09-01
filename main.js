// import Render from "render.js";
const { tickspeed } = require("./settings/settings.json");
const classRender = require("./render");

let Render = new classRender();

// Render.draw(10, 10, 3);
// Render.draw(10, 15, 3);

// Render.draw(10, 10, 3);
// Render.draw(28, 7, 3);

// Render.drawLn(10, 10, 28, 7, 6);
// Render.drawLn(5, 5, 10, 10, 6);
// Render.drawLn(10, 5, 10, 10, 6);
// Render.drawRect(10, 5, 20, 10, 4);
// Render.drawRect(15, 7, 25, 12, 5);

let dl = Render.drawLn;

dl();

function tick() {
    Render.render();
}

setInterval(tick, 1000 / tickspeed);
