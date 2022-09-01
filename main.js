const render = require("./render");
const { tickspeed } = require("./settings/settings.json")

function tick() {
    render()
}

setInterval(tick, 1000 / tickspeed)

