var items = Array("rock", "paper", "scissors");

function getComputerChoice(){
    var item = items[Math.floor(Math.random()*items.length)];
    console.log(item);
}

getComputerChoice();