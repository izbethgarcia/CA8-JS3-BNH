
      //declare variabels at top 
        let playerName;
        let greetPlayer;
        let playersChoice;
        let computersChoice;
        let theWinnerMessage;
        let playAgain;
        let playAgainResponse;
        let randomChoice;
        const gameChoices = ["bear", "ninja", "hunter"];
        const theResults;
       

//Welcome banner and ask for players name//
  playerName = prompt('Welcome to Bear Hunter Ninja! Please enter your name to get started:  ');

  //Greet Player with their name//
  greetPlayer = `Hi ${playerName} Let's Play!`;
  alert(greetPlayer);

  //Ask players choice//
   playersChoice = prompt('Who are you: Bear, Ninja, or Hunter?');

  //Computers random choice
    randomChoice = Math.floor(Math.random() * gameChoices.length);
    computersChoice = gameChoices[randomChoice];

   //Determine the winner 9 cases using if else and switch//
    theWinnerMessage = "";
   if (playersChoice === "Bear" || playersChoice === "bear") {
  
   switch (computersChoice) {
    case "Bear":
      theWinnerMessage = "Tie!";
      break;
    case "Ninja":
      theWinnerMessage  = "You win!";
      break;
    case  "Hunter":
      theWinnerMessage = "Computer wins!";
      break;
    default:
        break;
  }

} else if (playersChoice === "Ninja" || playersChoice === "ninja") { //checks for upper or lower case

  switch (computersChoice) {
    case "Ninja":
      theWinnerMessage = "Tie!";
      break;
    case  "Bear":
      theWinnerMessage = "Computer wins!";
      break;
    case  "Hunter":
      theWinnerMessage = "You win!";
      break;
    default:
     break
  }
} else if (playersChoice === "Hunter" || playersChoice === "hunter") {

  switch (computersChoice) {
    case "Hunter":
      theWinnerMessage = "Tie!";
      break;
    case "Bear":
      theWinnerMessage = "You win!";
      break;
    case  "Ninja":
      theWinnerMessage = "Computer wins!";
      break;
    default:
      break;
  }

} 
playAgainResponse = prompt(`${playerName}\n would you like to play again, Yes or No`);

 // Game results/Winner message //
 theResults = `${playerName}, You picked ${playersChoice}! The computer picked ${computersChoice}! ${theWinnerMessage}`;
  document.getElementById('gameResults').innerHTML = theResults; 
 
    
   
