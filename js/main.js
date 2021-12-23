const choices = ["rock", "paper", "scissors"];

function computerPlay(){
    let randomIndex = Math.floor(Math.random() * choices.length) ;
    let selectedChoice = choices[randomIndex];
    return selectedChoice;
}

function playRound(playerSelection, computerSelection) {
    // convert player entry to lowercase for comparison
    let playerSelectionLowered = playerSelection.toLowerCase();

    // check for tie
    if (computerSelection === playerSelectionLowered) {
        return `Both chose ${computerSelection}. Its a Tie =/`
    }

    // initialize boolean, true if match winner
    let winner;

    // no tie, compare both players' choice
    switch(playerSelectionLowered){
        case 'rock':
        winner = computerSelection === 'scissors' ? true : false;
        break;

        case 'paper':
        winner = computerSelection === 'rock' ? true : false;
        break;

        case 'scissors':
        winner = computerSelection === 'paper' ? true : false;
        break;
    }

    // output match results
    if (winner){ 
        return `You win. ${playerSelectionLowered} beats ${computerSelection}`;
    }
    else {
        return `You lose. ${computerSelection} beats ${playerSelectionLowered}`;
    }
}

