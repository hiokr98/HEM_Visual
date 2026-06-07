let clothesColor;
let bgDistance = 0; 
let buildings = []; 

function setup() {
  createCanvas(600, 400);
  clothesColor = color(80, 105, 170); 
  noStroke();

  for (let i = 0; i < 6; i++) {
    let xRange = random(1) < 0.5 ? random(0, width / 2 - 150) : random(width / 2 + 150, width);
    buildings.push({
      startX: xRange, 
      w: random(60, 120), 
      h: random(150, 250), 
      c: color(random(100, 150), random(100, 150), random(100, 150), 200) 
    });
  }
}

function draw() {
  background(220, 230, 240); 

  let scaleFactor = map(bgDistance, 0, 100, 1.2, 0.4); 
  let yOffset = map(bgDistance, 0, 100, 50, -120); 

  for (let b of buildings) {
    fill(b.c);
    let currentX = map(bgDistance, 0, 100, b.startX, width / 2);

    push(); 
    translate(currentX, height - b.h * scaleFactor + yOffset); 
    scale(scaleFactor); 
    rect(0, 0, b.w, b.h); 
    
    fill(255, 255, 100, 150); 
    for (let x = 10; x < b.w - 10; x += 25) {
      for (let y = 20; y < b.h - 20; y += 40) {
        rect(x, y, 15, 25);
      }
    }
    pop(); 
  }

  let cx = width / 2;
  let cy = 190;

  fill(85, 40, 20);
  ellipse(cx, cy - 10, 205, 220); 
  beginShape();
  vertex(cx - 100, cy + 20);
  bezierVertex(cx - 110, cy + 100, cx - 145, cy + 150, cx - 90, cy + 200); 
  vertex(cx + 90, cy + 200);
  bezierVertex(cx + 145, cy + 150, cx + 110, cy + 100, cx + 100, cy + 20); 
  endShape(CLOSE);

  fill(clothesColor);
  beginShape();
  vertex(cx - 160, height);
  bezierVertex(cx - 150, cy + 100, cx - 80, cy + 85, cx, cy + 105); 
  bezierVertex(cx + 80, cy + 85, cx + 150, cy + 100, cx + 160, height);
  endShape(CLOSE);

  fill(255, 224, 205);
  rect(cx - 18, cy + 60, 36, 55, 5);

  noFill();
  stroke(218, 165, 32); 
  strokeWeight(2);
  arc(cx, cy + 85, 45, 30, 0.2, PI - 0.2);
  fill(255, 215, 0); 
  noStroke();
  ellipse(cx, cy + 105, 8, 12); 
  fill(0, 191, 255); 
  ellipse(cx, cy + 107, 4, 6);

  noStroke();
  fill(255, 224, 205);
  ellipse(cx, cy, 145, 165);

  fill(255);
  ellipse(cx - 35, cy - 5, 42, 30);
  ellipse(cx + 35, cy - 5, 42, 30);

  let eyeX = map(mouseX, 0, width, -7, 7);
  let eyeY = map(mouseY, 0, height, -5, 5);

  fill(60, 30, 20); 
  ellipse(cx - 35 + eyeX, cy - 5 + eyeY, 22, 22);
  ellipse(cx + 35 + eyeX, cy - 5 + eyeY, 22, 22);

  fill(255);
  ellipse(cx - 30 + eyeX, cy - 10 + eyeY, 8, 8);
  ellipse(cx + 40 + eyeX, cy - 10 + eyeY, 8, 8);

  stroke(85, 40, 20);
  strokeWeight(4);
  noFill();
  arc(cx - 35, cy - 28, 35, 12, PI + 0.2, TWO_PI - 0.2);
  arc(cx + 35, cy - 28, 35, 12, PI + 0.2, TWO_PI - 0.2);
  noStroke();
  fill(235, 170, 150);
  ellipse(cx, cy + 15, 12, 8);

  stroke(190, 80, 70);
  strokeWeight(3);
  noFill();
  if (mouseIsPressed) {
    arc(cx, cy + 35, 55, 30, 0, PI); 
  } else {
    arc(cx, cy + 38, 45, 18, 0.1, PI - 0.1); 
  }

  noStroke();
  fill(95, 50, 30);
  beginShape(); 
  vertex(cx - 2, cy - 82);
  bezierVertex(cx - 40, cy - 82, cx - 85, cy - 60, cx - 78, cy - 25);
  bezierVertex(cx - 85, cy - 55, cx - 50, cy - 78, cx - 2, cy - 82);
  endShape(CLOSE);
  beginShape(); 
  vertex(cx + 2, cy - 82);
  bezierVertex(cx + 40, cy - 82, cx + 85, cy - 60, cx + 78, cy - 25);
  bezierVertex(cx + 85, cy - 55, cx + 50, cy - 78, cx + 2, cy - 82);
  endShape(CLOSE);

  noStroke();
  if (mouseIsPressed) {
    fill(255, 100, 100, 160);
  } else {
    fill(255, 155, 155, 90); 
  }
  ellipse(cx - 45, cy + 25, 25, 15);
  ellipse(cx + 45, cy + 25, 25, 15);
}

function keyPressed() {
  if (bgDistance < 100) {
    bgDistance += 10; 
  } else {
    bgDistance = 0;
  }
  
  if (key === 's') {
    saveGif('myCharacter', 10);
  }
}