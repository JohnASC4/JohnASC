var x = 50; // starting coordinate
var y = 50; // starting y coordinatr
var vx = 5; // starting
var vy = 20;
var speed = 5
function setup(){
    createCanvas(500,500);
}
function draw(){
background("red");
fill("yellow");
 var aye = ellipse (x,y,80,80);
x += vx;
//x+=speed;
//if(x>500-30/ 2){
  //  speed = -speed;
//}
//if(x < 0 +30 / 2){
  //  speed = -speed;
//}
//}
text("You hungry ",100,100);

 if(x>=500-25){
 vx = -vx;
}else if (x <= 0+25){
 vx = -vx;
}
}
function mousePressed(){
 if(aye){
colorPick ="green";
 }
}
//update