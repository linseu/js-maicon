function setup() {
    createCanvas(600, 400);
    background("rgb(12,12,145)")
  }
  
  function draw() {
    stroke("yellow");
    fill("green");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  
