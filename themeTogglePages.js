let darkModeEnabled = false; // Boolean Variable to keep track of if dark mode is enabled

const themeToggleButton = document.getElementById("theme-toggle-button"); // get the actual button that toggles the mode
const rootElement = document.querySelector(":root"); // Get the CSS :root object so i can manipulate the color variables
const settingsButtonImg = document.getElementById("settings-img"); // Get the Image for the 'settings' menu cuz its an image not an object thats coloured
const themeButtonImg = document.getElementById("theme-toggle-button-image"); // Get the Image for the button itself so I can change it to sun and moon


const enableDarkMode = () => {
    rootElement.style.setProperty("--primary-color", "#181A1B");
    rootElement.style.setProperty("--secondary-color", "#313537");
    rootElement.style.setProperty("--text", "#ACA8A6");
    rootElement.style.setProperty("--secondary-text", "#ccc");
    settingsButtonImg.src = "../img/settings-white.png";
    themeButtonImg.src = "../img/icons/moon.png";
};
// ^ When the function is called change all the colours to the dark versions


const disableDarkMode = () => {
    rootElement.style.setProperty("--primary-color", "#fff");
    rootElement.style.setProperty("--secondary-color", "#D3D3D3");
    rootElement.style.setProperty("--text", "#111");
    rootElement.style.setProperty("--secondary-text", "#3f3f3f");
    settingsButtonImg.src = "../img/settings.png";
    themeButtonImg.src = "../img/icons/sun.png";
};
// ^ When the function is called change all the colours to the light versions


const loadDarkModeState = () => { //Function to keep track of the dark mode between pages
    const darkModeState = localStorage.getItem("darkModeEnabled"); // Checks if the website has dark mode on or off
    if (darkModeState === "true") { // if its true
        darkModeEnabled = true; // set the Global scope variable to true
        enableDarkMode(); // run the function to turn on dark mode
    } else {                        // if not
        darkModeEnabled = false; // set the variable to false
        disableDarkMode();  // turn the world white
    }
};

themeToggleButton.addEventListener("click", () => { // when the check thingy is clicked
    darkModeEnabled = !darkModeEnabled; // set the global scope variable to the opposite of its current state

    if (darkModeEnabled) { // if darkModeEnabled is true then
        enableDarkMode();   // enable dark mode
    } else {                // if not
        disableDarkMode(); // disable dark mode
    };

    localStorage.setItem("darkModeEnabled", darkModeEnabled); // save the global scope variable for future use
});

document.addEventListener("DOMContentLoaded", loadDarkModeState); //load the global scope variable when the page loads
