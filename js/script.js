//dsplay player and Saturn(computer) choice
const saturnChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
let result
//console.log(saturnChoiceDisplay);
//console.log(playerChoiceDisplay);
//console.log(result);

//round count
let round = 0;
const roundNumber = document.getElementById("rounds");
//console.log(roundNumber);



//event listener for clicked button
$( ".rock" ).click(function() {
    playerChoice = "Rock";
//if player clicks rock give an argument of "rock".
   game("rock")
   $(this).fadeOut('slow');
   $(this).fadeIn('slow');

  });
  $( ".paper" ).click(function() {
      playerChoice = "Paper";
    //if player clicks rock give an argument of "paper".
    game("paper")
    $(this).slideUp('slow');
    $(this).slideDown('slow');
  });
  $( ".scissors" ).click(function() {
      playerChoice = "Scissors";
    //if player clicks rock give an argument of "scissors".
    game("scissors")
    $(this).hide('slow');
    $(this).show('slow');
  });
//reset button
$(".reset" ).click(function() {
//need function
})
  

//define computer random choice
 //math.random returns num between 0-1
 //math.floor will round up number
function saturnChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
//console.log(saturnChoice());
 
  }
  
  //define game function
  function game(playerChoice) {
   //console.log(playerChoice);
  let computerChoice = saturnChoice();
 // console.log("player--" + playerChoice);
  //console.log("Saturn--" + computerChoice);
  
//nested if and else statements for winning, losing and tie
const score = function(playerChoice, computerChoice) {
 
  //rock scores
  if(playerChoice === "rock") {
    if(computerChoice === "scissors"){
      result = 'YOU WIN 🌟';
    }else if(playerChoice === "rock"){
      if(computerChoice === "paper"){
        result = 'YOU LOSE 💥';
      }else if(playerChoice === computerChoice){
        result = 'TIE 😆';
      }
    }
  }

//paper scores
if(playerChoice === "paper") {
  if(computerChoice === "rock"){
    result = 'YOU WIN 🌟';
  }else if(playerChoice === "paper"){
    if(computerChoice === "scissors"){
      result = 'YOU LOSE 💥';
    }else if(playerChoice === computerChoice){
      result = 'TIE 😆';
    }
  }
}
//scissors scores
if(playerChoice === "scissors") {
  if(computerChoice === "paper"){
    result = 'YOU WIN 🌟';
  }else if(playerChoice === "scissors"){
    if(computerChoice === "rock"){
      result = 'YOU LOSE 💥';
    }else if(playerChoice === computerChoice){
      result = 'TIE 😆';
    }
  }
}

}
console.log("Player " + playerChoice);
console.log("Saturn " + computerChoice)
//start score function
score(playerChoice, computerChoice)

//display player and saturns choice & results 
playerChoiceDisplay.innerHTML = playerChoice
saturnChoiceDisplay.innerHTML = computerChoice
resultDisplay.innerHTML = result
//round count 
round++;
roundNumber.innerHTML = round
}

//reset function
//score-board
//set game to 3 rounds-player with 2 wins is champion
