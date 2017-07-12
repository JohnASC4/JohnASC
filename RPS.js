var playerChoice = 'r';
var choices = ['r','p','s'];
var compChoice = choices[Math.floor(Math.random()*3)];

if (playerChoice == compChoice){
    console.log("It's a tie!");
}
//player picks rock and computer picks paper
if (playerChoice == "r" && compChoice =='p'){
    console.log('Rock loses to paper. You lose!');
}
//player picks rock and computer picks scissor
if (playerChoice == 'r' && compChoice == 's'){
  console.log('Rock beats scissor. You win!');
}

//player picks paper and computer picks rock
if (playerChoice == 'p' && compChoice == 'r'){
  console.log('Paper beats rock. You win!');
}
//player picks paper and computer picks scissor
if (playerChoice == 'p' && compChoice == 's'){
  console.log('Paper loses to scissor. You lose!');
}

//player picks scissor and computer picks paper
if (playerChoice == 's' && compChoice == 'p'){
  console.log('Scissor beats paper. You win!');
}
//player picks scissor and computer picks rock
if (playerChoice == 's' && compChoice == 'r'){
  console.log('Scissor loses to rock. You lose!');
}
