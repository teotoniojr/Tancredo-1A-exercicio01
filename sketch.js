function setup() {
  createCanvas(200, 200);
  background("silver");
}

function draw() {
  
  
  stroke("purple");
  fill("gold");
  
  if(mouseIsPressed){
    rect(mouseX,mouseY,30,30);
  }
  
  
  
}