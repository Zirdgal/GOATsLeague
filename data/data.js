
// Match Data

const game0000 = {
    team1: "", team1Goal: 0,team1Assist: 0,team1Save: 0,team1Foul: 0, 
    team2: "", team2Goal: 0,team2Assist: 0,team2Save: 0,team2Foul: 0
};
export const game0004 = {
    team1: "Brazz", team1Goal: 3,team1Assist: 0,team1Save: 3,team1Foul: 3,
    team2: "Sperma", team2Goal: 2,team2Assist: 0,team2Save: 8,team2Foul: 2
};
export const game0005 = {
    team1: "Sperma", team1Goal: 3,team1Assist: 1,team1Save: 7,team1Foul: 2, 
    team2: "Faze", team2Goal: 4,team2Assist: 0,team2Save: 5,team2Foul: 4
};
export const game0006 = {
    team1: "McD", team1Goal: 0,team1Assist: 0,team1Save: 0,team1Foul: 0, 
    team2: "Brazz", team2Goal: 0,team2Assist: 0,team2Save: 0,team2Foul: 0
};
export const game0007 = {
    team1: "McD", team1Goal: 0,team1Assist: 0,team1Save: 0,team1Foul: 0, 
    team2: "Faze", team2Goal: 0,team2Assist: 0,team2Save: 0,team2Foul: 0
};

const games = [
    game0004, game0005, game0006, game0007
]; // All games in one place

function collectTeamStatsFromGames(games) {
    let teamStats = {};

    games.forEach(game => {
        // Process stats for team1
        if (!teamStats[game.team1]) { 
            teamStats[game.team1] = { goals: 0, assists: 0, saves: 0, fouls: 0 }; // does a whacky check to not make a memory leak
        }
        teamStats[game.team1].goals += game.team1Goal;
        teamStats[game.team1].assists += game.team1Assist; // += means to bassicaly transfer the value of the number
        teamStats[game.team1].saves += game.team1Save; // on the right to be the same as the left
        teamStats[game.team1].fouls += game.team1Foul;

        // Process stats for team2
        if (!teamStats[game.team2]) {
            teamStats[game.team2] = { goals: 0, assists: 0, saves: 0, fouls: 0 };
        }
        teamStats[game.team2].goals += game.team2Goal;
        teamStats[game.team2].assists += game.team2Assist;
        teamStats[game.team2].saves += game.team2Save;
        teamStats[game.team2].fouls += game.team2Foul;
    });

    return teamStats; // repeat
}

const allTeamStats = collectTeamStatsFromGames(games); // The Object that holds all the Teams Stats

// This is for trying to filter out the stats from ^ into the individual teams

const teamName1 = "Brazz"; 
const teamName2 = "Sperma";
const teamName3 = "Faze";
const teamName4 = "McD";

// Now we export this to other files to hide the fact my code gets messy easily if i dont split this up into different files ( do not look at my css file please for the love of god )
export let brazzStats = allTeamStats[teamName1];
export let spermaStats = allTeamStats[teamName2];
export let fazeStats = allTeamStats[teamName3];
export let mcdStats = allTeamStats[teamName4];
