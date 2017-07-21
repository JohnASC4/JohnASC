
function setup(){
createCanvas(500,500);
background(100);


}
var gridlay = [[0,0],[0,0],[0,0],[0,0]]
function draw(){
  
  
}

function mousePressed(){
    var d = dist(mouseX,mouseY,50,50);
    if (d=50){
        fill("red");
    }
}