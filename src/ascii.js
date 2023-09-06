// npm intall ascii-art
const art = require("ascii-art");

// function for creating ASCII art. Render in terminaal for 1500 milliseconds 
const asciiArt = () => {
    art.font("Employee Tracker", "doom").then((rendered) => {
        console.log(rendered);
        setTimeout(() => {
            console.clear();
        }, 1500);
    });
};

module.exports = asciiArt;