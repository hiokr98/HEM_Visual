let sunX, sunY;
let snowflakes = [];
let cycleCount = 1; // 1: 여름, 3: 가을, 2: 겨울

let frontFlag = false;
let middleFlag = false;
let backFlag = false;

let isStopped = false; 

let flagColor1, flagColor2, flagColor3;

function setup() {
  createCanvas(600, 400);
  
  colorMode(RGB, 255);
  noStroke();
  
  sunX = 550; 
  
  for (let i = 0; i < 60; i++) {
    snowflakes.push({
      x: random(0, width),
      y: random(-height, 0), 
      speed: random(1, 3.5),   
      size: random(2, 15)
    });
  }

 flagColor1 = color(random(0, 255), random(0, 255), random(0, 255));
 flagColor2 = color(random(0, 255), random(0, 255), random(0, 255));
 flagColor3 = color(random(0, 255), random(0, 255), random(0, 255));

  saveGif('20262256_문해은', 20, { delay: 0, units: 'seconds' });
}

function draw() {
  if (millis() > 16500 && cycleCount === 2) {
    isStopped = true;
  }

  if (!isStopped) {
    sunX -= 3.2; 
  } else {
    sunX = -250; 
  }
  
  // [교수님 필수 조건 4, 5, 6] frameCount, sin(), cos() 활용 (해의 흔들림 애니메이션)
  let wave = sin(frameCount * 0.05) * 2;
  let angle = map(sunX, 650, -250, 0, PI);
  
  sunY = map(sin(angle), 0, 1, 130, 70) + wave; 
  sunX += cos(frameCount * 0.1) * 0.2; 

  if (frameCount % 30 === 0) {
  flagColor1 = color(random(0, 255), random(0, 255), random(0, 255));
  flagColor2 = color(random(0, 255), random(0, 255), random(0, 255));
  flagColor3 = color(random(0, 255), random(0, 255), random(0, 255));
}
  if (!isStopped && sunX < -250) {
    if (cycleCount === 1) {
      sunX = 650; 
      cycleCount = 3; 
    } else if (cycleCount === 3) {
      sunX = 650; 
      cycleCount = 2; 
      for (let flake of snowflakes) {
        flake.y = random(-height, 0); 
      }
    }
  }

  if (isStopped) {
    frontFlag = true;
    middleFlag = true;
    backFlag = true;
  } else if (sunX < 50) {
    if (cycleCount === 1) frontFlag = true;
    if (cycleCount === 3) middleFlag = true;
    if (cycleCount === 2) backFlag = true;
  }

  let currentSky, currentSun, currentM1, currentM2, currentM3;
  let finalSunsetColor = color('#FF7A00');
  let deepMidnightBlue = color('#0B132B');

  let sunAlpha = map(sunX, 150, 0, 255, 0, true);
  let sunrisePercent = map(sunX, 650, 500, 0, 1, true);

  if (cycleCount === 1) {
    let summerSky = color('#B2FFFF'); 
    let summerSun = color('#FFD700'); 
    let summerM1 = color('#339933');
    let summerM2 = color('#80FF00');
    let summerM3 = color('#A0FFA0');

    let sunsetM1 = color('#1A2E2E'); 
    let sunsetM2 = color('#425916'); 
    let sunsetM3 = color('#556B2F'); 

    let baseSky = lerpColor(deepMidnightBlue, summerSky, sunrisePercent); 
    currentSky = lerpColor(lerpColor(baseSky, finalSunsetColor, map(sunX, 350, 100, 0, 1, true)), deepMidnightBlue, map(sunX, 100, -50, 0, 1, true));
    let sunsetPercent = map(sunX, 350, -50, 0, 1, true);
    currentSun = lerpColor(summerSun, finalSunsetColor, sunsetPercent);
    
    let initialM1 = lerpColor(deepMidnightBlue, summerM1, sunrisePercent);
    let initialM2 = lerpColor(deepMidnightBlue, summerM2, sunrisePercent);
    let initialM3 = lerpColor(deepMidnightBlue, summerM3, sunrisePercent);
    currentM1 = lerpColor(initialM1, sunsetM1, sunsetPercent);
    currentM2 = lerpColor(initialM2, sunsetM2, sunsetPercent);
    currentM3 = lerpColor(initialM3, sunsetM3, sunsetPercent);

  } else if (cycleCount === 3) {
    let autumnSky = color('#00B4D8'); 
    let autumnSun = color('#FFD166'); 
    let autumnM1 = color('#7A1F1D');
    let autumnM2 = color('#D62828');
    let autumnM3 = color('#FFB703');

    let sunsetAM1 = color('#3D0B0A'); 
    let sunsetAM2 = color('#5E0B0B'); 
    let sunsetAM3 = color('#855E00'); 

    let baseSky = lerpColor(deepMidnightBlue, autumnSky, sunrisePercent);
    currentSky = lerpColor(lerpColor(baseSky, finalSunsetColor, map(sunX, 350, 100, 0, 1, true)), deepMidnightBlue, map(sunX, 100, -50, 0, 1, true));
    let sunsetPercent = map(sunX, 350, -50, 0, 1, true);
    currentSun = lerpColor(autumnSun, finalSunsetColor, sunsetPercent);
    
    let initialAM1 = lerpColor(deepMidnightBlue, autumnM1, sunrisePercent);
    let initialAM2 = lerpColor(deepMidnightBlue, autumnM2, sunrisePercent);
    let initialAM3 = lerpColor(deepMidnightBlue, autumnM3, sunrisePercent);
    currentM1 = lerpColor(initialAM1, sunsetAM1, sunsetPercent);
    currentM2 = lerpColor(initialAM2, sunsetAM2, sunsetPercent);
    currentM3 = lerpColor(initialAM3, sunsetAM3, sunsetPercent);

  } else {
    let winterSky = color('#A8BDC5'); 
    let winterSun = color('#FFF0AA'); 
    let winterM1 = color('#243E3E');
    let winterM2 = color('#4A5D2F');
    let winterM3 = color('#5C7A23');

    let sunsetWM1 = color('#142424'); 
    let sunsetWM2 = color('#243015'); 
    let sunsetWM3 = color('#364912'); 

    let baseSky = lerpColor(deepMidnightBlue, winterSky, sunrisePercent);
    currentSky = lerpColor(lerpColor(baseSky, finalSunsetColor, map(sunX, 350, 100, 0, 1, true)), deepMidnightBlue, map(sunX, 100, -50, 0, 1, true));
    let sunsetPercent = map(sunX, 350, -50, 0, 1, true);
    currentSun = lerpColor(winterSun, finalSunsetColor, sunsetPercent);
    
    let initialWM1 = lerpColor(deepMidnightBlue, winterM1, sunrisePercent);
    let initialWM2 = lerpColor(deepMidnightBlue, winterM2, sunrisePercent);
    let initialWM3 = lerpColor(deepMidnightBlue, winterM3, sunrisePercent);
    currentM1 = lerpColor(initialWM1, sunsetWM1, sunsetPercent);
    currentM2 = lerpColor(initialWM2, sunsetWM2, sunsetPercent);
    currentM3 = lerpColor(initialWM3, sunsetWM3, sunsetPercent);
  }

  background(currentSky);

  let finalSunColorWithAlpha = color(red(currentSun), green(currentSun), blue(currentSun), sunAlpha);
  fill(finalSunColorWithAlpha);
  circle(sunX, sunY, 100); 

  fill(currentM1); triangle(-50, 400, 150, 140, 350, 400); 
  fill(currentM2); triangle(50, 400, 250, 180, 450, 400);  
  fill(currentM3); triangle(150, 400, 350, 220, 550, 400); 

  if (cycleCount === 2) {
    let snowPercent = map(sunX, 400, -50, 0, 1, true); 
    if (snowPercent > 0) {
      let winterSnowColor = color('#DCC7B0'); 
      let snowColorWithSunset = lerpColor(color(255, 255, 255), winterSnowColor, snowPercent);
      fill(snowColorWithSunset);
      let h1 = 60 * snowPercent; let w1 = h1 * (200 / 260); 
      triangle(150 - w1, 140 + h1, 150, 140, 150 + w1, 140 + h1);
      let h2 = 55 * snowPercent; let w2 = h2 * (200 / 220);
      triangle(250 - w2, 180 + h2, 250, 180, 250 + w2, 180 + h2);
      let h3 = 50 * snowPercent; let w3 = h3 * (200 / 180);
      triangle(350 - w3, 220 + h3, 350, 220, 350 + w3, 220 + h3);
    }
  }

  noStroke(); 
  
  if (frontFlag === true) {
    fill(flagColor1);
    triangle(350, 220, 350, 196, 376.4, 208);
  }
  if (middleFlag === true) {
    fill(flagColor2);
    triangle(250, 180, 250, 158.4, 268, 169.2);
  }
  if (backFlag === true) {
    fill(flagColor3);
    triangle(150, 140, 150, 125.6, 162, 132.8);
  }

  if (cycleCount === 2) {
    let snowOpacity = isStopped ? 220 : map(sunX, -50, 500, 150, 240, true); 
    for (let flake of snowflakes) {
      fill(255, 255, 255, snowOpacity);
      circle(flake.x, flake.y, flake.size); 
      
      flake.y += flake.speed;               
      if (flake.y > height) { 
        flake.y = random(-20, 0); 
        flake.x = random(0, width); 
      }
    }
  }
}