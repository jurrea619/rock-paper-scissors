const choices = ["rock", "paper", "scissors"]; // game options

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

function game(){
    // initialize score counters
    let playerTally = 0;
    let computerTally = 0;
    // initialize player choice variable. Assigned on button click
    let playerChoice;

    const results = document.querySelector('#results');
    const score = document.querySelector('#score');
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerChoice = button.value;
            const compChoice = computerPlay();
            const result = playRound(playerChoice, compChoice);
            if (result === 'win') {
                 playerTally++; 
            }
            else if (result === 'lose') {
                 computerTally++; 
            }
            else{
                results.textContent = "Tie game"
            }
            score.textContent = `Player: ${playerTally}, Computer: ${computerTally}`;
            window.setTimeout(()=>{results.textContent="";},1000);
        });
    });
}

game();