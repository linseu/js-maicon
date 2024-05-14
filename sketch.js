function setup() {
  createCanvas(600, 600);
  background("rgb(12,12,145)")
}

function draw() {
  stroke("yellow");
  fill("green");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}

  
