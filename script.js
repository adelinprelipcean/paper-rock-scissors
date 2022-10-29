var items = Array("rock", "paper", "scissors");

function getComputerChoice(){
    var item = items[Math.floor(Math.random()*items.length)];
    return item;
}

const playerSelection = "rock";
let computerScore = 0;
let playerScore = 0;

function playGame(){
    let computerSelection = getComputerChoice();
    if (computerSelection === playerSelection.toLowerCase()){
        console.log("TIE!");
    }
    else if (computerSelection === "rock" && playerSelection.toLowerCase() === "paper"){
        console.log("YOU WON! PAPER BEATS ROCK!");
        playerScore++;
    }
    else if (computerSelection === "rock" && playerSelection.toLowerCase() === "scissors"){
        console.log("YOU LOST! ROCK BEATS SCISSORS");
        computerScore++;
    }
    else if (computerSelection === "paper" && playerSelection.toLowerCase() === "rock"){
        console.log("YOU LOST! PAPER BEATS ROCK!");
        computerScore++;
    }
    else if (computerSelection === "paper" && playerSelection.toLowerCase() === "scissors"){
        console.log("YOU WON! SCISSORS BEATS PAPER");
        playerScore++;
    }
    else if (computerSelection === "scissors" && playerSelection.toLowerCase() === "paper"){
        console.log("YOU LOST! SCISSORS BEATS PAPER");
        computerScore++;
    }
    else {
        console.log("YOU WON! ROCK BEATS SCISSORS");
        playerScore++;
    }
}

for (let i = 0; i < 5; i++){
    console.log(playGame());
}

if (computerScore > playerScore){
    alert("You lost!");
}
else {
    alert("You won!!!!!");
}

