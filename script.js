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



function playGame() {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        console.log(`You: ${humanChoice}, Computer: ${computerChoice}`)
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
        console.log(`Score: ${humanScore}-${computerScore}`)
    }

    let humanSelection;
    let computerSelection;

    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice()
        computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("You won the game!")
    } else if (humanScore < computerScore) {
        console.log("Computer won the game!")
    } else {
        console.log("It's a tie!")
    }
    console.log(`Final Score: ${humanScore}-${computerScore}`)
}