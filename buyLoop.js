var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
var n = prompt('How many more times? ');

var bank = 1000; // the player with 1,000 dollars

console.log("You have 1,000"); // tells the player he has 1,000 dollars

var inventory = ['hyrule sword', 'potion', 'shield', 'bow'];

// prompt the user if they want to buy an item


for(var x=0;x < inventory.length; x++){
    var answer = prompt("Would you like to buy a " + inventory[0]);

if(answer === 'yes'){
    bank = bank - 100
    console.log("You have" + bank + 'left');
    }   
}
while(bank > 899){
    console.log("You have "+ bank +" left. hyrule sword = 100, potion = 200, shield = 50, bow = 100");
    var answer = prompt("What would you like to buy?");
   if(answer == "hyrule sword"){  
     bank = bank - 100;
   
   console.log("You bought a sword!");
}else if(answer == "potion"){
 bank = bank - 200;
 
 console.log("You bought a potion!");
}else if(answer == "shield"){
 bank = bank - 50;
 
 console.log("You bought a shield!");
  
}else if(answer == "bow"){
 bank = bank - 100;

 console.log("You bought a bow!");

}else{
  console.log("Not available. Please choose items listed above.");  
}
}

while(bank < 850){
    console.log("You have "+ bank +" left. hyrule sword = 100, potion = 200, shield = 50, bow = 100");
    var answer = prompt("What would you like to buy?");
   if(answer == "hyrule sword"){  
     bank = bank - 100;
   
   console.log("You bought a sword!");
}else if(answer == "potion"){
 bank = bank - 200;
 
 console.log("You bought a potion!");
}else if(answer == "shield"){
 bank = bank - 50;
 
 console.log("You bought a shield!");
  
}else if(answer == "bow"){
 bank = bank - 100;

 console.log("You bought a bow!");

}else{
  console.log("Not available. Please choose items listed above.");  
}
}

