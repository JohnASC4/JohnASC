var alien1 = {
 x:50,
 y:50,
 shown:0
}
 var alien2 = {
     x:100,
     y:50,
     shown:0
 }
    var alien3 = {
     x:150,
     y:50,
     shown:0
 }
    var alien4 = {
     x:200,
     y:50,
     shown:0
 }
    var alien5 = {
     x:250,
     y:50,
     shown:0
 }
    var alien6 = {
    x:300,
    y:50,
    shown:0
    }

var x = 375;
var y = 675;
var bullets = [];



var color = ["red", "blue"]
var rColor = rand(color);
function setup() {
    createCanvas(800,800);
    
    
    
}



function draw() {
    var c = ('#0f0');
    
    if (keyIsDown(LEFT_ARROW)) {
        x = x - 5;

    } if (keyIsDown(RIGHT_ARROW)) {
        x = x + 5;
    }
    clear();
  
    background("black");
    fill(c);
    rect(x, y, 70, 20);
      var aliens = [alien1,alien2,alien3,alien4,alien5,alien6]
for (var i= 0;i < aliens.length; i++) {
    fill("red");
if(aliens[i].shown === 0){
        ellipse(aliens[i].x,aliens[i].y,25,25);
    }

    //var x1 = 50;
    //var y1 = 50;

    //fill("red");
   // ellipse(x1, y1, 25, 25);
   // ellipse(90, 50, 25, 25);
   // ellipse(130, 50, 25, 25);
    //ellipse(170, 50, 25, 25);
   // ellipse(210, 50, 25, 25);
   // ellipse(250, 50, 25, 25);

    // fill("white");
    // ellipse(50, 90, 25, 25);
    // ellipse(90, 90, 25, 25);
    // ellipse(130, 90, 25, 25);
    // ellipse(170, 90, 25, 25);
    // ellipse(210, 90, 25, 25);
    // ellipse(250, 90, 25, 25);

    // fill("blue");
    // ellipse(50, 130, 25, 25);
    // ellipse(90, 130, 25, 25);
    // ellipse(130, 130, 25, 25);
    // ellipse(170, 130, 25, 25);
    // ellipse(210, 130, 25, 25);
    // ellipse(250, 130, 25, 25);
//ellipse(x + 37, y, 5, 5)
  fill('#0f0');
rect(x+32,y-19,10,20);
for(var v=0;v < bullets.length; v++) {
    bullets[v][1] -=5;
    ellipse(bullets[v][0],bullets[v][1] +600,10,10);

  
    
}


}
function keyPressed(){
 if(keyCode === 32){
     bullets.push([x,+35,y]);
 }
}

}
//update


