// npm intall ascii-art
const art = requrie("ascii-art");

// function for creating ASCII art. Render in terminaal for 1500 milliseconds 

const asciiArt = () => {
    art.font("Employess Tracker", "doom").then((rendered) => {
        console.log(rednered);
        setTimeout(() => {
            console.clear();
        }, 1500);
    });
};