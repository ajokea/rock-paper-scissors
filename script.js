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

function playGame() {
    let humanScore = 0
    let computerScore = 0

    const body = document.querySelector('body');

    const buttons = document.createElement('div');

    const rockBtn = document.createElement('button');
    const paperBtn = document.createElement('button');
    const scissorsBtn = document.createElement('button');

    rockBtn.textContent = 'ROCK';
    paperBtn.textContent = 'PAPER';
    scissorsBtn.textContent = 'SCISSORS';

    rockBtn.addEventListener('click', () => {
        playRound('rock', getComputerChoice())
    });
    paperBtn.addEventListener('click', () => {
        playRound('paper', getComputerChoice())
    });
    scissorsBtn.addEventListener('click', () => {
        playRound('scissors', getComputerChoice())
    });

    buttons.appendChild(rockBtn);
    buttons.appendChild(paperBtn);
    buttons.appendChild(scissorsBtn);

    body.appendChild(buttons);

    const results = document.createElement('div');
    const update = document.createElement('p');
    const score = document.createElement('p');
    score.textContent = `You: ${humanScore} - Computer: ${computerScore}`;
    const endGame = document.createElement('p');
    results.appendChild(update);
    body.append(results, score, endGame);

    function playRound(humanChoice, computerChoice) {
        endGame.textContent = "";
        if(humanChoice === computerChoice) {
            update.textContent = `Tie! You both chose ${humanChoice}!`;
        } else {
            if(humanChoice == 'rock') {
                switch(computerChoice) {
                    case 'paper':
                        computerScore++
                        update.textContent = "Computer scored! Paper beats rock!";
                        break;
                    
                    case 'scissors':
                        humanScore++
                        update.textContent = "You scored! Rock beats scissors!";
                        break;
                }
    
            } else if(humanChoice === 'paper') {
                switch(computerChoice) {
                    case 'rock':
                        humanScore++
                        update.textContent = "You scored! Paper beats rock!";
                        break;
                    
                    case 'scissors':
                        computerScore++
                        update.textContent = "Computer scored! Scissors beats paper!";
                        break;
                }
            } else {
                switch(computerChoice) {
                    case 'rock':
                        computerScore++
                        update.textContent = "Computer scored! Rock beats scissors!";
                        break;
                    
                    case 'paper':
                        humanScore++
                        update.textContent = "You scored! Scissors beats paper!";
                        break;
                }
            }
        }
        score.textContent = `You: ${humanScore} - Computer: ${computerScore}`;

        if (humanScore == 5 || computerScore == 5) {
            endGame.textContent = humanScore == 5 ? "YOU WIN!" : "COMPUTER WINS!";
            humanScore = 0
            computerScore = 0
        }
    }
}

playGame()