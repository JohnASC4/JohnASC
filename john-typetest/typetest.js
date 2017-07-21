
function setup(){
 createCanvas(500,500);
 background("black");
}

function draw() {
  fill("white");
  textSize(20);
  textFont("Georgia");
  text("Please type the sentence below",10,30);
  text("Come as you are", 10, 100);
  text("Current Points "+ points,10,400);
    }
var points = 0;
  function keyTyped() {
  if (key === 'c') {
    points = 240;
  } else if (text = "You need to work on your typing",10,500) {
    points = -10
  }
return false;
  }

//update

