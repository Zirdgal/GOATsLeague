import { game0004, game0005 } from "../../data/data.js";

let goalElement = document.getElementById("brazz-goal");
let assistElement = document.getElementById("brazz-assist");
let foulElement = document.getElementById("brazz-foul");
let saveElement = document.getElementById("brazz-save");
let statsGoalElement = document.getElementById("stats-brazz-goal");
let statsAssistElement = document.getElementById("stats-brazz-assist");
let statsFoulElement = document.getElementById("stats-brazz-foul");
let statsSaveElement = document.getElementById("stats-brazz-save");

let goalCount = 3;
let assistCount = 0;
let foulCount = 2;
let saveCount = 3;


goalElement.innerHTML = "Vārti: " + goalCount;
assistElement.innerHTML = "Assisti: " + assistCount;
foulElement.innerHTML = "Sodi: " + foulCount;
saveElement.innerHTML = "Save: " + saveCount;

statsGoalElement.value = goalCount;
statsAssistElement.innerHTML = assistCount;
statsFoulElement.innerHTML = foulCount;
statsSaveElement.innerHTML = saveCount;