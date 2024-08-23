console.log("This is working!");

function getComputerChoice() {
    let num = Math.random();
    let compChoice;

    if (num <= 0.33){
        compChoice = "Rock";
    }
    else if (num > 0.33 && num <= 0.66){
        compChoice = "Paper";
    }
    else{
        compChoice = "Scissor";
    }

    // console.log(compChoice);
    return compChoice;
}

function getUserChoice() {
    let userChoice = prompt("Rock, Paper, or Scissor?");
    // console.log(userChoice);
    return userChoice;
}

// row: user input column: comp input

const rps = [[null,0, 1], [1, null, 0], [0, 1, null]];

function convertToCode(inputstring) {
    let output = undefined;
    switch(inputstring){
        case "Rock":
            output = 0;
            break;
            
        case "Paper":
            output = 1;
            break;
        
        case "Scissor":
            output = 2;
            break;

        default:
            output = undefined;
    }

    return output;

}



function whoWins(userChoice, compChoice) {
let userInput = convertToCode(userChoice);
let compInput = convertToCode(compChoice);

if (rps[userInput][compInput] == 1){
    console.log("User Wins");
}
else if (rps[userInput][compInput] == 0) {
    console.log("Computer Wins");
}
else {
    console.log("It's a tie!");
}

  
}

function playOneRound() {
    let userinp = getUserChoice();
    console.log("user: " + userinp);
    let compinp = getComputerChoice();
    console.log("comp: " + compinp);

    whoWins (userinp, compinp);

}

let userScore, compScore = 0;



for (let i = 5; i; i--)
{
    playOneRound();
}

// getUserChoice();