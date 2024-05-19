import { mcdStats } from "../../data/data.js";

let mcdWinElement = document.getElementById("mcd-win");
let mcdLossElement = document.getElementById("mcd-loss");
let mcdGoalElement = document.getElementById("mcd-goal");
let mcdAssistElement = document.getElementById("mcd-assist");
let mcdFoulElement = document.getElementById("mcd-foul");
let mcdSaveElement = document.getElementById("mcd-save");

mcdWinElement.innerHTML = "Uzvaras: " + mcdStats.gamesWon
mcdLossElement.innerHTML = "Zaudes: " + mcdStats.gamesLost
mcdGoalElement.innerHTML = "Vārti: " + mcdStats.goals
mcdAssistElement.innerHTML = "Assisti: " + mcdStats.assists
mcdFoulElement.innerHTML = "Sodi: " + mcdStats.fouls
mcdSaveElement.innerHTML = "Save: " + mcdStats.saves