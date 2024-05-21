function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    
    stroke("white");
    fill("red");
    
    // console.log(mouseIsPressed);
    
    if(mouseIsPressed) {
    rect(mouseX,mouseY,30,35);
    }
  }