// Function to display match score
export function displayMatchScore(game, elementId) { // paramaters - the ID of the game and the ID of the actual html brick thingy
    const matchScoreTextElement = document.getElementById(elementId); // Saves this const as the current html brick
    matchScoreTextElement.innerHTML = `${game.team1Goal} - ${game.team2Goal}`; // Sets the const to the value I want
}