import { fazeStats } from "../../data/data.js";

let fazeWinElement = document.getElementById("faze-win");
let fazeLossElement = document.getElementById("faze-loss");
let fazeGoalElement = document.getElementById("faze-goal");
let fazeAssistElement = document.getElementById("faze-assist");
let fazeFoulElement = document.getElementById("faze-foul");
let fazeSaveElement = document.getElementById("faze-save");

fazeWinElement.innerHTML = "Uzvaras: " + fazeStats.gamesWon
fazeLossElement.innerHTML = "Zaudes: " + fazeStats.gamesLost
fazeGoalElement.innerHTML = "Vārti: " + fazeStats.goals
fazeAssistElement.innerHTML = "Assisti: " + fazeStats.assists
fazeFoulElement.innerHTML = "Sodi: " + fazeStats.fouls
fazeSaveElement.innerHTML = "Save: " + fazeStats.saves