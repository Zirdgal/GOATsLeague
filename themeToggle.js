let darkModeEnabled = false;

const themeToggleButton = document.getElementById("theme-toggle-button");

themeToggleButton.addEventListener("click", () => {
    darkModeEnabled = !darkModeEnabled;

    if (darkModeEnabled) {
        enableDarkMode();
    } else {
        disableDarkMode();
    };
});

const enableDarkMode = () => {
    document.body.style.backgroundColor = "#181A1B"
    document.body.style.color = "#fff"
};
const disableDarkMode = () => {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#111"
};
