var promptSync = require("prompt-sync")();

var mashArray = ['The Rainbow Path', 'McDonalds', 'Greenhill Zone', 'Arizona'];



var firstQuestion = [2, 20];

var secondQuestion = ["Sonic", "Kirby"];


for ( var i = 0; i < 2; i ++){
  firstQuestion.push(promptSync("how much times will you hit?"));
  secondQuestion.push(promptSync("Who will you choose?"));
}

var randArray = function(array){
  return array[Math.floor(Math.random()*array.length)]; // this randomizes the arena. array.length is the 4 arenas.
}

console.log("You fought " + randArray(secondQuestion) + 
            " in the " + randArray(mashArray) +
            " and hit them " + randArray(firstQuestion) + 
            " times. Too bad. Mewtwo wins!");
            //projectupdate.