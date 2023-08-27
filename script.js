function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    let resultMessage = "It's a tie!";
    if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      resultMessage = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else if (
      (playerChoice === "scissors" && computerChoice === "rock") ||
      (playerChoice === "rock" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "scissors")
    ) {
      resultMessage = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
  
      
    const resultTexts=document.getElementById("#resulttext") 
     document.writeln(resultMessage)  
     resultTexts.textContent = resultMessage;
      const resultContainers = document.querySelector(".resultcontainer");
      resultContainers.style.display = "block";
    
  }
  