function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    const resultText = document.getElementById("result-text");
    if (resultText) {
      if (playerChoice === computerChoice) {
        resultText.textContent = "It's a tie!";
      } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
      ) {
        resultText.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
      } else {
        resultText.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
      }
    }
  
    const resultContainer = document.querySelector(".resultcontainer");
    if (resultContainer) {
      resultContainer.style.display = "block";
    }
  }
  