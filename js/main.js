const choices = ["rock", "paper", "scissors"];

// return random choice for computer
function computerPlay(){
    // choose random index between 0 and 2, return choice at given index
    let randomIndex = Math.floor(Math.random() * choices.length) ; 
    let selectedChoice = choices[randomIndex];
    return selectedChoice;
}

// return 'win', 'lose', or 'tie'
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

    // return results
    if (winner){ 
        return `win`;
    }
    else {
        return `lose`;
    }
}

// play 5 round game
function game(){
    const playerName = prompt("Enter your name:");
    let playerTally = 0;
    let compTally = 0;

    // game loop
    for(let i = 0 ; i <= 4 ; i++){
    // get both players' choice
    playerChoice = prompt(`${playerName}: Enter rock, paper, or scissors`);
    compChoice = computerPlay();
    // play round
    result = playRound(playerChoice, compChoice);
    // update scores if either side wins, decrement counter to replay round
    if (result === 'win'){ playerTally++; }
    else if (result === 'lose') { compTally++;}
    else { 
        console.log(`Tie game. Round will replay.`);
        i--;
    } // tie, replay round
    // log round score
    console.log(`Score: ${playerName}=>${playerTally}, Computer=>${compTally}`);
    } //exit loop

    //  log winner
    playerTally > compTally ? console.log(`${playerName} wins`) : console.log(`Computer wins`);
}

game();