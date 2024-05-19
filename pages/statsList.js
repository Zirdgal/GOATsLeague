import { brazzStats, spermaStats, fazeStats, mcdStats } from "../data/data.js";

let fazeGoalObject =  document.getElementById("stats-faze-goal");
let fazeAssistObject =  document.getElementById("stats-faze-assist");
let fazeFoulObject =  document.getElementById("stats-faze-foul");
let fazeSaveObject =  document.getElementById("stats-faze-save");

let brazzGoalObject =  document.getElementById("stats-brazz-goal");
let brazzAssistObject =  document.getElementById("stats-brazz-assist");
let brazzFoulObject =  document.getElementById("stats-brazz-foul");
let brazzSaveObject =  document.getElementById("stats-brazz-save");

let spermaGoalObject =  document.getElementById("stats-sperma-goal");
let spermaAssistObject =  document.getElementById("stats-sperma-assist");
let spermaFoulObject =  document.getElementById("stats-sperma-foul");
let spermaSaveObject =  document.getElementById("stats-sperma-save");

let mcdGoalObject =  document.getElementById("stats-mcd-goal");
let mcdAssistObject =  document.getElementById("stats-mcd-assist");
let mcdFoulObject =  document.getElementById("stats-mcd-foul");
let mcdSaveObject =  document.getElementById("stats-mcd-save");

fazeGoalObject.innerHTML = fazeStats.goals;
fazeAssistObject.innerHTML = fazeStats.assists;
fazeFoulObject.innerHTML = fazeStats.fouls;
fazeSaveObject.innerHTML = fazeStats.saves;

brazzGoalObject.innerHTML = brazzStats.goals;
brazzAssistObject.innerHTML = brazzStats.assists;
brazzFoulObject.innerHTML = brazzStats.fouls;
brazzSaveObject.innerHTML = brazzStats.saves;

spermaGoalObject.innerHTML = spermaStats.goals;
spermaAssistObject.innerHTML = spermaStats.assists;
spermaFoulObject.innerHTML = spermaStats.fouls;
spermaSaveObject.innerHTML = spermaStats.saves;

mcdGoalObject.innerHTML = mcdStats.goals;
mcdAssistObject.innerHTML = mcdStats.assists;
mcdFoulObject.innerHTML = mcdStats.fouls;
mcdSaveObject.innerHTML = mcdStats.saves;