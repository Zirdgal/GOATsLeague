
const goalElement = document.getElementById("sperma-goal");
const assistElement = document.getElementById("sperma-assist");
const foulElement = document.getElementById("sperma-foul");
const saveElement = document.getElementById("sperma-save");
const statsGoalElement = document.getElementById("stats-sperma-goal");
const statsAssistElement = document.getElementById("stats-sperma-assist");
const statsFoulElement = document.getElementById("stats-sperma-foul");
const statsSaveElement = document.getElementById("stats-sperma-save");

let spermaGoalCount = 5; // 2 + 3
let spermaAssistCount = 1; // 0 + 1
let spermaFoulCount = 4; // 2 + 2 
let spermaSaveCount = 15; // 8 + 7


goalElement.innerHTML = "Vārti: " + spermaGoalCount;
assistElement.innerHTML = "Assisti: " + spermaAssistCount;
foulElement.innerHTML = "Sodi: " + spermaFoulCount;
saveElement.innerHTML = "Save: " + spermaSaveCount;


