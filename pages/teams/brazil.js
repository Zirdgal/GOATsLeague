import { brazzStats } from "../../data/data.js";

let brazzWinElement = document.getElementById("brazz-win");
let brazzLossElement = document.getElementById("brazz-loss");
let brazzGoalElement = document.getElementById("brazz-goal");
let brazzAssistElement = document.getElementById("brazz-assist");
let brazzFoulElement = document.getElementById("brazz-foul");
let brazzSaveElement = document.getElementById("brazz-save");

brazzWinElement.innerHTML = "Uzvaras: " + brazzStats.gamesWon
brazzLossElement.innerHTML = "Zaudes: " + brazzStats.gamesLost
brazzGoalElement.innerHTML = "Vārti: " + brazzStats.goals
brazzAssistElement.innerHTML = "Assisti: " + brazzStats.assists
brazzFoulElement.innerHTML = "Sodi: " + brazzStats.fouls
brazzSaveElement.innerHTML = "Save: " + brazzStats.saves