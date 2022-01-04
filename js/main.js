const choices = ["rock", "paper", "scissors"]; // game options
const results = document.querySelector('#results');
const score = document.querySelector('#score');
const buttons = document.querySelectorAll('button');
let playerTally = 0;
let computerTally = 0;

// return random choice for computer
function computerPlay(){
    // choose random index between 0 and 2, return choice at given index
    let randomIndex = Math.floor(Math.random() * choices.length) ; 
    return choices[randomIndex];
}

// return 'win', 'lose', or 'tie'
function playRound(playerSelection, computerSelection) {

    // check for tie
    if (computerSelection === playerSelection) {
        return `Both chose ${computerSelection}. Its a Tie =/`
    }

    // initialize boolean, true if match winner
    let winner;

    // no tie, compare both players' choice
    switch(playerSelection){
        case 'rock': // rock smashes scissors, loses to paper (how?!?)
        winner = computerSelection === 'scissors' ? true : false;
        break;

        case 'paper': // paper beats rock (how?!?), cut by scissors
        winner = computerSelection === 'rock' ? true : false;
        break;

        case 'scissors': // scissors cuts paper, get smashed by rock
        winner = computerSelection === 'paper' ? true : false;
        break;
    }

    // return round results
    if (winner){ 
        return `win`;
    }
    else {
        return `lose`;
    }
}

function playGame(playerChoice){
    //const playerChoice = button.value;
    const compChoice = computerPlay();
    const result = playRound(playerChoice, compChoice);
    if (result === 'win') {
        playerTally++;
    }
    else if (result === 'lose') {
        computerTally++;
    }
    else {
        results.textContent = "Tie game, try again."
    }
    score.textContent = `Player: ${playerTally}, Computer: ${computerTally}`;
    if (playerTally >= 5 || computerTally >= 5) {
        results.textContent = playerTally >= 5 ? "Player wins" : "Comp Wins";
        //removeListeners();
    }
    else {
        window.setTimeout(() => { results.textContent = ""; }, 2000);
    }
}

/* REFACTOR LISTENER FUNCTION
function removeListeners(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.removeEventListener('click', buttonPress());
    });
}
*/

function attachListeners(){ 
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const playerChoice = button.value;
            playGame(playerChoice);
        });
    });
}

attachListeners();