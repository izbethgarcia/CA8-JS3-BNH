//Welcome banner and ask for players name//
  let playerName = prompt('Welcome to Bear Hunter Ninja! Please enter your name to get started:  ');

  //Greet Player with their name//
  let greetPlayer = `Hi ${playerName} Let's Play!`;
  alert(greetPlayer);

  //Ask players choice//
  let playersChoice = prompt('Who are you: Bear, Ninja, or Hunter?');

  //Computers hard coded choice//
  let computersChoice = "Bear"; 

   //Determine the winner 9 cases using if else and switch//
   let theWinnerMessage = "";
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

 // Game results/Winner message //
  const theResults = `${playerName}, You picked ${playersChoice}! The computer picked ${computersChoice}! ${theWinnerMessage}`;
  document.getElementById('gameResults').innerHTML = theResults; 
 
    
   
