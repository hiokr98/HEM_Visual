let clothesColor;

function setup() {
  createCanvas(600, 400); // 요청하신 600x400 크기
  clothesColor = color(80, 105, 170); 
  noStroke();
}

function draw() {
  background(220, 230, 240); // 첫 번째 코드의 은은한 배경색 유지

  // 중심 좌표 설정 (600x400 화면에 맞춤)
  let cx = width / 2;
  let cy = 185;

  // --- 1. 뒷머리 ---
  fill(85, 40, 20);
  ellipse(cx, cy - 10, 205, 220); 
  
  beginShape();
  vertex(cx - 100, cy + 20);
  bezierVertex(cx - 110, cy + 100, cx - 145, cy + 150, cx - 90, cy + 200); 
  vertex(cx + 90, cy + 200);
  bezierVertex(cx + 145, cy + 150, cx + 110, cy + 100, cx + 100, cy + 20); 
  endShape(CLOSE);

  // --- 2. 몸통/옷 ---
  fill(clothesColor);
  beginShape();
  vertex(cx - 160, height);
  bezierVertex(cx - 150, cy + 100, cx - 80, cy + 85, cx, cy + 105); 
  bezierVertex(cx + 80, cy + 85, cx + 150, cy + 100, cx + 160, height);
  endShape(CLOSE);

  // --- 3. 목 ---
  fill(255, 224, 205);
  rect(cx - 18, cy + 60, 36, 55, 5);

  // --- 4. 목걸이 ---
  noFill();
  stroke(218, 165, 32); 
  strokeWeight(2);
  arc(cx, cy + 85, 45, 30, 0.2, PI - 0.2);
  fill(255, 215, 0); 
  noStroke();
  ellipse(cx, cy + 105, 8, 12); 
  fill(0, 191, 255); 
  ellipse(cx, cy + 107, 4, 6);

  // --- 5. 얼굴 형 ---
  noStroke();
  fill(255, 224, 205);
  ellipse(cx, cy, 145, 165);

  // --- 6. 눈 ---
  fill(255);
  ellipse(cx - 35, cy - 5, 42, 30);
  ellipse(cx + 35, cy - 5, 42, 30);
  fill(60, 30, 20);
  ellipse(cx - 35, cy - 5, 22, 22);
  ellipse(cx + 35, cy - 5, 22, 22);
  fill(255);
  ellipse(cx - 30, cy - 10, 8, 8);
  ellipse(cx + 40, cy - 10, 8, 8);

  // --- 7. 눈썹/코 ---
  stroke(85, 40, 20);
  strokeWeight(4);
  noFill();
  arc(cx - 35, cy - 28, 35, 12, PI + 0.2, TWO_PI - 0.2);
  arc(cx + 35, cy - 28, 35, 12, PI + 0.2, TWO_PI - 0.2);
  noStroke();
  fill(235, 170, 150);
  ellipse(cx, cy + 15, 12, 8);

  // --- 8. 입 (평소의 미소로 고정) ---
  stroke(190, 80, 70);
  strokeWeight(3);
  noFill();
  arc(cx, cy + 38, 45, 18, 0.1, PI - 0.1); 

  // --- 9. 앞머리 ---
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

  // --- 10. 볼터치 (은은한 기본 상태로 고정) ---
  noStroke();
  fill(255, 155, 155, 90);  
  ellipse(cx - 45, cy + 25, 25, 15);
  ellipse(cx + 45, cy + 25, 25, 15);
}