import { brazzStats, spermaStats, fazeStats, mcdStats } from "../data/data.js"; // retrieve data from data.js

let fazeGamesPlayedObject =  document.getElementById("stats-faze-games-played");
let fazeGamesWonObject =  document.getElementById("stats-faze-games-won");
let fazeGamesLostObject =  document.getElementById("stats-faze-games-lost");
let fazeGoalObject =  document.getElementById("stats-faze-goal");
let fazeAssistObject =  document.getElementById("stats-faze-assist");
let fazeFoulObject =  document.getElementById("stats-faze-foul");
let fazeSaveObject =  document.getElementById("stats-faze-save");

let brazzGamesPlayedObject =  document.getElementById("stats-brazz-games-played");
let brazzGamesWonObject =  document.getElementById("stats-brazz-games-won");
let brazzGamesLostObject =  document.getElementById("stats-brazz-games-lost");
let brazzGoalObject =  document.getElementById("stats-brazz-goal");
let brazzAssistObject =  document.getElementById("stats-brazz-assist");
let brazzFoulObject =  document.getElementById("stats-brazz-foul");
let brazzSaveObject =  document.getElementById("stats-brazz-save");

let spermaGamesPlayedObject =  document.getElementById("stats-sperma-games-played");
let spermaGamesWonObject =  document.getElementById("stats-sperma-games-won");
let spermaGamesLostObject =  document.getElementById("stats-sperma-games-lost");
let spermaGoalObject =  document.getElementById("stats-sperma-goal");
let spermaAssistObject =  document.getElementById("stats-sperma-assist");
let spermaFoulObject =  document.getElementById("stats-sperma-foul");
let spermaSaveObject =  document.getElementById("stats-sperma-save");

let mcdGamesPlayedObject =  document.getElementById("stats-mcd-games-played");
let mcdGamesWonObject =  document.getElementById("stats-mcd-games-won");
let mcdGamesLostObject =  document.getElementById("stats-mcd-games-lost");
let mcdGoalObject =  document.getElementById("stats-mcd-goal");
let mcdAssistObject =  document.getElementById("stats-mcd-assist");
let mcdFoulObject =  document.getElementById("stats-mcd-foul");
let mcdSaveObject =  document.getElementById("stats-mcd-save");

fazeGamesWonObject.innerHTML = fazeStats.gamesWon;
fazeGamesLostObject.innerHTML = fazeStats.gamesLost;
fazeGoalObject.innerHTML = fazeStats.goals;
fazeAssistObject.innerHTML = fazeStats.assists;
fazeFoulObject.innerHTML = fazeStats.fouls;
fazeSaveObject.innerHTML = fazeStats.saves;

brazzGamesWonObject.innerHTML = brazzStats.gamesWon;
brazzGamesLostObject.innerHTML = brazzStats.gamesLost;
brazzGoalObject.innerHTML = brazzStats.goals;
brazzAssistObject.innerHTML = brazzStats.assists;
brazzFoulObject.innerHTML = brazzStats.fouls;
brazzSaveObject.innerHTML = brazzStats.saves;

spermaGamesWonObject.innerHTML = spermaStats.gamesWon;
spermaGamesLostObject.innerHTML = spermaStats.gamesLost;
spermaGoalObject.innerHTML = spermaStats.goals;
spermaAssistObject.innerHTML = spermaStats.assists;
spermaFoulObject.innerHTML = spermaStats.fouls;
spermaSaveObject.innerHTML = spermaStats.saves;

mcdGamesWonObject.innerHTML = mcdStats.gamesWon;
mcdGamesLostObject.innerHTML = mcdStats.gamesLost;
mcdGoalObject.innerHTML = mcdStats.goals;
mcdAssistObject.innerHTML = mcdStats.assists;
mcdFoulObject.innerHTML = mcdStats.fouls;
mcdSaveObject.innerHTML = mcdStats.saves;
