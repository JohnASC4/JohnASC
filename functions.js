function rand(num){
//this is a function. this functions finds a number beteen 0 and 1

var randNum = Math.random()*num; //asign a random number to randNum 
var result = Math.floor(randNum); //set randNum to non-decimal
var myName = "Johnny";
return result;// returns a random number between 0 and 1
}


var myDice = ['one','two','three','four','five','six']; // 5 possibilities
console.log("You rolled a " + myDice[rand(6)]); 