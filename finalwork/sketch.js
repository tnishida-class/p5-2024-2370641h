let balloons;
let circle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  balloons = [];
  circle=[];
}

function draw() {
  background(160, 192, 255);
  
  const newBalloon = CreateBalloon();
  if (newBalloon) {
    let attempts = 0;
    while (Overlap(newBalloon) && attempts < 10) {
      newBalloon.x = random(0, width);
      newBalloon.y = height;
      attempts++;
    }
    if (!Overlap(newBalloon)) {
      balloons.push(newBalloon);
    }
  }
 
    if(mouseIsPressed){
       for (let i = 0; i < balloons.length; i++) {
    let b = balloons[i];
      if((mouseX>b.x-35&&mouseX<b.x+35)&&(mouseY>b.y-55&&mouseY<b.y+15)){
        balloons.splice(i,1); 
        for(let i = 0; i < 16; i++){
          let s =50;
          let angle = TWO_PI * i / 16;
          let x = b.x+ cos(angle) * s;
          let y = b.y-20 + sin(angle) * s;
          fill("red");
          ellipse(x, y, 5);
         }
       }
    }
    }

  for (let i = 0; i < balloons.length; i++) {
    let b = balloons[i];
    fill('yellow');
    bezier(b.x, b.y, b.x - 60, b.y - 60, b.x + 60, b.y - 60, b.x, b.y);
    line(b.x, b.y, b.x, b.y + 25);
    noFill();
    //ellipse(b.x,b.y-20,50);

    b.x += b.vx;
    b.y += b.vy;

  
      
    for (let j = 0; j < balloons.length; j++) {
      if (i !== j) {
        let c = balloons[j];
        let mid = dist(b.x, b.y - 20, c.x, c.y - 20);
        if (mid < 100) {
          let angle = atan2(c.y - b.y, c.x - b.x);
          let overlap = 100 - mid;

          b.x -= cos(angle) * overlap / 2;
          b.y -= sin(angle) * overlap / 2;
          c.x += cos(angle) * overlap / 2;
          c.y += sin(angle) * overlap / 2;
        }
      }
    }

    if (b.x < 0 || b.x > width) {
      b.vx = -b.vx;
    }

    b.x = constrain(b.x, 60, width - 60);
    b.y = constrain(b.y, 60, height);
  }
}


function CreateBalloon() {
  if (frameCount % 7 === 1) {
    return {
      x: random(0, width),
      y: height,
      vx: random(-2, 2),
      vy: random(-2, -1)
    };
  }
  
}

function Overlap(newBalloon) {
  for (let i = 0; i < balloons.length; i++) {
    let b = balloons[i];
    let mid = dist(newBalloon.x, newBalloon.y - 20, b.x, b.y - 20);
    if (mid < 100) {
      return true;
    }
  }
  return false;
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
