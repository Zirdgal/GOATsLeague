let darkModeEnabled = false;

const themeToggleButton = document.getElementById("theme-toggle-button");
const rootElement = document.querySelector(":root");
const settingsButtonImg = document.getElementById("settings-img");

themeToggleButton.addEventListener("click", () => {
    darkModeEnabled = !darkModeEnabled;

    if (darkModeEnabled) {
        enableDarkMode();
    } else {
        disableDarkMode();
    };
});

const enableDarkMode = () => {
    rootElement.style.setProperty("--primary-color", "#181A1B");
    rootElement.style.setProperty("--secondary-color", "#313537");
    rootElement.style.setProperty("--text", "#ACA8A6");
    rootElement.style.setProperty("--secondary-text", "#ccc");
    settingsButtonImg.src = "/img/settings-white.png";
};
const disableDarkMode = () => {
    rootElement.style.setProperty("--primary-color", "#fff");
    rootElement.style.setProperty("--secondary-color", "#D3D3D3");
    rootElement.style.setProperty("--text", "#111");
    rootElement.style.setProperty("--secondary-text", "#3f3f3f");
    settingsButtonImg.src = "/img/settings.png";
};
