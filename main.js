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
    let resultMessage = '';
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                playerWin = 1;
            } else if (computerChoice === "paper") {
                playerWin = -1;
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                playerWin = 1;
            } else if (computerChoice === "scissors") {
                playerWin = -1;
            } 
            break;
        case "scissors":
            if (computerChoice === "paper") {
                playerWin = 1;
            } else if (computerChoice === "rock") {
                playerWin = -1;
            }
            break;
        default:
            break;
    }
    if (playerWin === 1) {
        resultMessage = handleResult(humanChoice, computerChoice, "win");
    } else if (playerWin === -1) {
        resultMessage = handleResult(humanChoice, computerChoice, "lose");
    } else {
        resultMessage = handleResult(humanChoice, computerChoice, "tie");
    }
    return [playerWin, resultMessage];
}

// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;
//     const ROUNDS = 5;
//     let numberOfRounds = 5;
//     while (numberOfRounds--) {
//         let humanChoice = getHumanChoice();
//         let computerChoice = getComputerChoice();
//         let playerWin = playRound(humanChoice, computerChoice);
//         let roundResultMessage = "It's a tie!\n";
//         if (playerWin === 1) {
//             humanScore++;
//             roundResultMessage = "You win the round!\n";
//         } else if (playerWin === -1) {
//             computerScore++;
//             roundResultMessage = "You lose the round!\n";
//         }
//         let message = roundResultMessage + "Finished " + (ROUNDS - numberOfRounds) + " round\nCurrent score: \nYou: " + humanScore + " - Bot: " + computerScore;
//         console.log(message);
//         alert(message);
//     }
//     if (humanScore > computerScore) {
//         console.log("You win the game!");
//     } else if (humanScore < computerScore) {
//         console.log("You lose the game!");
//     } else {
//         console.log("It's a tie!");
//     }
// }

function renderResult(result, resultMessage) {
    const state = document.querySelector('.state');
    const resultText = document.querySelector('.result-text');
    state.textContent = result;

    resultText.textContent = resultMessage;
}

function createSelectorContainer(imgSrc, name) {
    const div = document.createElement('div');
    div.className = 'selector-container';
    div.setAttribute('style','display: flex; flex-direction: column; align-items: center; justify-content: center;')
    
    const img = document.createElement('img');
    img.src = imgSrc;
    img.width = 200;
    img.height = 200;
    img.setAttribute('style','margin-bottom: 10px;')

    const button = document.createElement('button');
    button.textContent = name;
    button.addEventListener('click', () => {
        let [result, message] = playRound(name.toLowerCase(), getComputerChoice());
        if (result === 1) {
            humanScore++;
        } else if (result === -1) {
            computerScore++;
        }
        numberOfRounds--;
        let gameStateMessage = "Finished " + (ROUNDS - numberOfRounds) + " round\nCurrent score: \nYou: " + humanScore + " - Bot: " + computerScore;
        renderResult(message, gameStateMessage);
        if (numberOfRounds === 0) {
            alert(humanScore > computerScore ? "You win the game!" : humanScore < computerScore ? "You lose the game!" : "It's a tie!")
        }
    });

    div.append(img);
    div.append(button);
    container.append(div);
}

selectors = {
    Rock: 'https://media.cnn.com/api/v1/images/stellar/prod/190828151832-amy-lee-lummus-rock-paper-scissors-high-res.jpg?q=w_1600,h_901,x_0,y_0,c_fill',
    Scissors: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rock-paper-scissors_%28scissors%29.png/1200px-Rock-paper-scissors_%28scissors%29.png',
    Paper: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rock-paper-scissors_%28paper%29.png/1200px-Rock-paper-scissors_%28paper%29.png'
}

const container = document.querySelector('.container');
container.setAttribute('style','display: flex; flex-direction: row; align-items: center; justify-content: space-between;');
Object.entries(selectors).forEach(([name, imgSrc]) => {
    createSelectorContainer(imgSrc, name);
});
const ROUNDS = 5;
let humanScore = 0;
let computerScore = 0;
let numberOfRounds = ROUNDS;