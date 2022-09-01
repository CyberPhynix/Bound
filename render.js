const { resulution, design } = require("./settings/settings.json");

module.exports = function () {
    console.clear();

    displayMap = [];

    for (let i = 0; i < resulution.h; i++) {
        displayMap.push([]);
    }

    for (let i = 0; i < resulution.h; i++) {
        for (let j = 0; j < resulution.w; j++) {
            displayMap[i].push(design.bg);
        }
    }

    displayString = "";

    displayMap.forEach((e) => {
        e.forEach((e) => {
            displayString += e;
        });
        displayString += "\n";
    });

    console.log(displayString);
};
