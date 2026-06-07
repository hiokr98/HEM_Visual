function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(175, 245, 255);
  
  noStroke();
  
  fill(255, 210, 0);          
  circle(500, 80, 100);       
  
  fill(165, 242, 155);
  triangle(-50, 400, 150, 140, 380, 400);
  
  fill(118, 236, 0);
  triangle(50, 400, 250, 180, 520, 400);
  
  fill(43, 150, 51);
  triangle(150, 400, 350, 220, 550, 400);
}
