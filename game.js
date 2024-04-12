let choices = ['rock', 'paper', 'scissors'];

function playRound(playerSelection, computerSelection){
    computerSelection = computerSelection.toLowerCase();
    console.log("player choice:" + playerSelection);
    console.log("computer choice:" + computerSelection);
    if(playerSelection){
        if( playerSelection === computerSelection){
            return "It's a tie!";
        }

        if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {
            return (`You Win! ${playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1)}`)
        } else {
            return `You Lose! ${computerSelection.charAt(0).toUpperCase()+ computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1)}`
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let turn = 5
    for (let i = 0; i < turn; i++) {

        let playerSelection = prompt("Please select one of them:Rock,Paper,Scissors");
        
        if (!playerSelection) {
            console.log('Game cancelled by the player.');
            return;
        }

        playerSelection = playerSelection.toLowerCase();
        
        if (!(choices.includes(playerSelection))) {
            console.log("Invalid choice, please choose Rock, Paper, or Scissors.");
            turn++
            continue;
        }

        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        console.log(result)
        if (result.includes('Win')) playerScore++;
        if (result.includes('Lose')) computerScore++;

        console.log(`Current score is - You: ${playerScore}, Computer: ${computerScore}`);

    }

    if (playerScore > computerScore) {
        console.log(`You won the game with a score of ${playerScore} to ${computerScore}!`);
    } else if (playerScore < computerScore) {
        console.log(`You lost the game with a score of ${playerScore} to ${computerScore}.`);
    } else {
        console.log(`The game ended in a tie with a score of ${playerScore} to ${computerScore}.`);
    }
}

function computerPlay(){
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
game();
