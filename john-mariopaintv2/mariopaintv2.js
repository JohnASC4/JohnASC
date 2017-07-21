function setup(){
createCanvas(500,500);
background("green");
fill("red");
rect(30, 20, 55, 55);

(fill("yellow"));
rect(110,20,55,55);

(fill("blue"));
rect(190,20,55,55);

}
function mousePressed() {
  ellipse(mouseX, mouseY, 5, 5);
function mouseDragged() {
var colors = [ "yellow", "red", "yellow", "red" ];
var color = random(colors);  // select random word
    fill(color);
  ellipse(mouseX, mouseY, random([50],[80]), random([60],[100]));

  // prevent default
  return false;
}
//update
