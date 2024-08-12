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