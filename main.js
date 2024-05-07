function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 0.34) {
        return 'rock';
    } else if (randomNumber <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function standadizeChoice(choice) {
    return choice.toLowerCase();
}

function getHumanChoice() {
    let message = "Please enter your choice: rock, paper, or scissors.";
    let humanChoice;
    do {
        humanChoice = prompt(message);
        humanChoice = standadizeChoice(humanChoice);
    } while (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors');
    return humanChoice;
}

function handleResult(value1, value2, state) {
    if (state === "win") {
        return "You win! " + value1 + " beats " + value2;
    } else if (state === "lose") {
        return "You lose! " + value2 + " beats " + value1;
    } else {
        return "It's a tie!";
    }
}

function playRound(humanChoice, computerChoice) {
    let playerWin = 0;
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                console.log(handleResult(humanChoice, computerChoice, "win"));
                playerWin = 1;
            } else if (computerChoice === "paper") {
                console.log(handleResult(humanChoice, computerChoice, "lose"));
                playerWin = -1;
            } else {
                console.log(handleResult(humanChoice, computerChoice, "tie"));
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                console.log(handleResult(humanChoice, computerChoice, "win"));
                playerWin = 1;
            } else if (computerChoice === "scissors") {
                console.log(handleResult(humanChoice, computerChoice, "lose"));
                playerWin = -1;
            } else {
                console.log(handleResult(humanChoice, computerChoice, "tie"));
            }
            break;
        case "scissors":
            if (computerChoice === "paper") {
                console.log(handleResult(humanChoice, computerChoice, "win"));
                playerWin = 1;
            } else if (computerChoice === "rock") {
                console.log(handleResult(humanChoice, computerChoice, "lose"));
                playerWin = -1;
            } else {
                console.log(handleResult(humanChoice, computerChoice, "tie"));
            }
            break;
        default:
            break;
    }
    return playerWin;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const ROUNDS = 5;
    let numberOfRounds = 5;
    while (numberOfRounds--) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let playerWin = playRound(humanChoice, computerChoice);
        let roundResultMessage = "It's a tie!\n";
        if (playerWin === 1) {
            humanScore++;
            roundResultMessage = "You win the round!\n";
        } else if (playerWin === -1) {
            computerScore++;
            roundResultMessage = "You lose the round!\n";
        }
        let message = roundResultMessage + "Finished " + (ROUNDS - numberOfRounds) + " round\nCurrent score: \nYou: " + humanScore + " - Bot: " + computerScore;
        console.log(message);
        alert(message);
    }
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();