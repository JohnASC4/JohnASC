function setup(){
createCanvas(500,500);
background("blue");
}
function mouseDragged() {
var colors = [ "yellow", "red", "yellow", "red" ];
var color = random(colors);  // select random word
    fill(color);
  ellipse(mouseX, mouseY, random([50],[80]), random([60],[100]));

  // prevent default
  return false;
}

//update