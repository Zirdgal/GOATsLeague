import { spermaStats } from "../../data/data.js";

let spermaWinElement = document.getElementById("sperma-win");
let spermaLossElement = document.getElementById("sperma-loss");
let spermaGoalElement = document.getElementById("sperma-goal");
let spermaAssistElement = document.getElementById("sperma-assist");
let spermaFoulElement = document.getElementById("sperma-foul");
let spermaSaveElement = document.getElementById("sperma-save");

spermaWinElement.innerHTML = "Uzvaras: " + spermaStats.gamesWon
spermaLossElement.innerHTML = "Zaudes: " + spermaStats.gamesLost
spermaGoalElement.innerHTML = "Vārti: " + spermaStats.goals
spermaAssistElement.innerHTML = "Assisti: " + spermaStats.assists
spermaFoulElement.innerHTML = "Sodi: " + spermaStats.fouls
spermaSaveElement.innerHTML = "Save: " + spermaStats.saves