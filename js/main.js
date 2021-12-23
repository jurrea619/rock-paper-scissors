function computerPlay(){
    const choices = ["rock", "paper", "scissors"];
    let choiceIndex = Math.floor(Math.random() * choices.length) ;
    let selectedChoice = choices[choiceIndex];
    return selectedChoice;
}
