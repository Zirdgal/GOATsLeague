import { game0004, game0005 } from "../../data/data.js";

let goalElement = document.getElementById("brazz-goal");
let assistElement = document.getElementById("brazz-assist");
let foulElement = document.getElementById("brazz-foul");
let saveElement = document.getElementById("brazz-save");
let statsGoalElement = document.getElementById("stats-brazz-goal");
let statsAssistElement = document.getElementById("stats-brazz-assist");
let statsFoulElement = document.getElementById("stats-brazz-foul");
let statsSaveElement = document.getElementById("stats-brazz-save");

let goalCount = 0;
let assistCount = 0;
let foulCount = 0;
let saveCount = 0;



if (game0004.team1 = "Brazz") {

    goalCount = game0004.team1Goal + goalCount;
    assistCount = game0004.team1Assist + assistCount;
    foulCount = game0004.team1Foul + foulCount;
    saveCount = game0004.team1Save + saveCount;

} else if (game0004.team2 = "Brazz") {

    goalCount = game0004.team2Goal + goalCount;
    assistCount = game0004.team2Assist + assistCount;
    foulCount = game0004.team2Foul + foulCount;
    saveCount = game0004.team2Save + saveCount;

}

if (game0005.team1 = "Brazz") {

    goalCount = game0005.team1Goal + goalCount;
    assistCount = game0005.team1Assist + assistCount;
    foulCount = game0005.team1Foul + foulCount;
    saveCount = game0005.team1Save + saveCount;

} else if (game0005.team2 = "Brazz") {

    goalCount = game0005.team2Goal + goalCount;
    assistCount = game0005.team2Assist + assistCount;
    foulCount = game0005.team2Foul + foulCount;
    saveCount = game0005.team2Save + saveCount;

}


goalElement.innerHTML = "Vārti:" + goalCount;
assistElement.innerHTML = "Assisti:" + assistCount;
foulElement.innerHTML = "Sodi:" + foulCount;
saveElement.innerHTML = "Save:" + saveCount;

statsGoalElement.value = goalCount;
statsAssistElement.innerHTML = assistCount;
statsFoulElement.innerHTML = foulCount;
statsSaveElement.innerHTML = saveCount;