function getComputerChoice() {
    let choice;
    let randmomNumber = Math.floor(Math.random() * 3) + 1
    switch(randmomNumber) {
        case 1:
            choice = "rock"
            break;
        
        case 2:
            choice = "paper"
            break;

        case 3:
            choice = "scissors"
            break;
    }
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?").toLowerCase();
    return choice;
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        console.log("Tie!")
    } else {
        if(humanChoice == 'rock') {
            switch(computerChoice) {
                case 'paper':
                    computerScore++
                    console.log("Computer wins! Paper beats rock!")
                    break;
                
                case 'scissors':
                    humanScore++
                    console.log("You win! Rock beats scissors!")
                    break;
            }

        } else if(humanChoice === 'paper') {
            switch(computerChoice) {
                case 'rock':
                    humanScore++
                    console.log("You win! Paper beats rock!")
                    break;
                
                case 'scissors':
                    computerScore++
                    console.log("Computer wins! Scissors beats paper!")
                    break;
            }
        } else {
            switch(computerChoice) {
                case 'rock':
                    computerScore++
                    console.log("Computer wins! Rock beats scissors!")
                    break;
                
                case 'paper':
                    humanScore++
                    console.log("You win! Scissors beats paper!")
                    break;
            }
        }
    }
}