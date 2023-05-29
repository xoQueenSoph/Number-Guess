let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  return Math.floor(Math.random() * 10)
}

function compareGuesses(human, cpu, target) {

    let humanGuess = Math.abs(target - human);
    let cpuGuess = Math.abs(target - cpu);

    if (humanGuess === cpuGuess) {
        return true;
    } else if (humanGuess > cpuGuess) {
        return true;
    } else return false;
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++
    }

    function advanceRound() {
        currentRoundNumber++;
    }
