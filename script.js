/*
        1. Our page will prompt the user for one of the colors of the rainbow and will show that color hex code in an alert.
        */
// -create an array of valid color choices with hex
/*
RED #FF0000
ORANGE #FFA500
YELLOW #FFFF00
GREEN #00FF00
BLUE #0000FF
INDIGO #4B0082
VIOLET #EE82EE
*/
var rainbowChoice = [
    ["red", "#FF0000"],
    ["orange", "#FFA500"],
    ["yellow", "#FFFF00"],
    ["green", "#00FF00"],
    ["blue", "#0000FF"],
    ["indigo", "#4B0082"],
    ["violet", "#EE82EE"]
];
// -Show the user the color choices (roygbiv) - display the array
// -Prompt them to pick one of the colors (type it in)
// -store it in a value - window.pop()
var userColorChoice = window.prompt("Choose your background color(ROYGBIV or random)");
console.log(userColorChoice)
// -sanitize the input
function sanitizeInput(input) {
    var sanitized;
    return sanitized = input.trim().toLowerCase();
};
checkIfChoiceIsInRainbow();
// -check the value against the array of valid colors
// - need to turn this into a loop
function checkIfChoiceIsInRainbow() {
    if (sanitizeInput(userColorChoice) === rainbowChoice[0][0]) {
        var rainbowChoiceHex = rainbowChoice[0][1];
        console.log(rainbowChoiceHex);
        alert(`Your color choice, ${userColorChoice}, has a hex code of ${rainbowChoiceHex}`);
    } else if (sanitizeInput(userColorChoice) === rainbowChoice[1][0]) {
        var rainbowChoiceHex = rainbowChoice[1][1];
        console.log(rainbowChoiceHex);
        alert(`Your color choice, ${userColorChoice}, has a hex code of ${rainbowChoiceHex}`);
    } else if (sanitizeInput(userColorChoice) === rainbowChoice[2][0]) {
        var rainbowChoiceHex = rainbowChoice[2][1];
        console.log(rainbowChoiceHex);
        alert(`Your color choice, ${userColorChoice}, has a hex code of ${rainbowChoiceHex}`);
    } else if (sanitizeInput(userColorChoice) === rainbowChoice[3][0]) {
        var rainbowChoiceHex = rainbowChoice[3][1];
        console.log(rainbowChoiceHex);
        alert(`Your color choice, ${userColorChoice}, has a hex code of ${rainbowChoiceHex}`);
    } else if (sanitizeInput(userColorChoice) === rainbowChoice[4][0]) {
        var rainbowChoiceHex = rainbowChoice[4][1];
        console.log(rainbowChoiceHex);
        alert(`Your color choice, ${userColorChoice}, has a hex code of ${rainbowChoiceHex}`);
    } else if (sanitizeInput(userColorChoice) === rainbowChoice[5][0]) {
        var rainbowChoiceHex = rainbowChoice[5][1];
        console.log(rainbowChoiceHex);
        alert(`Your color choice, ${userColorChoice}, has a hex code of ${rainbowChoiceHex}`);
    } else if (sanitizeInput(userColorChoice) === rainbowChoice[6][0]) {
        var rainbowChoiceHex = rainbowChoice[6][1];
        console.log(rainbowChoiceHex);
        alert(`Your color choice, ${userColorChoice}, has a hex code of ${rainbowChoiceHex}`);
    } else if (sanitizeInput(userColorChoice) === "random") {
        var rainbowChoiceHex =
            `#${generateHex()}${generateHex()}${generateHex()}${generateHex()}${generateHex()}${generateHex()}`;
        console.log(rainbowChoiceHex);
        alert(`Your chose ${userColorChoice}, so here's the hex - ${rainbowChoiceHex}`);
    } else {
        alert(`Your color choice, ${userColorChoice}, is not a color of the rainbow.`);
    }

    document.body.style.backgroundColor = rainbowChoiceHex;
};

function generateHex() {
    var hex = "0123456789ABCDEF"
    var randIdx = Math.floor(Math.random() * hex.length);
    return hex[randIdx];
}
// -display the color hex code in an alert once they type in a correct choice

// -loop back and do it again

/*
2. When the user enters a color that's not one of the colors of the rainbow, throw an error
*/