// テキスト「キーボード操作に反応する」
let x, y;
let vx,vy;
const g=1;
const jump=20;
const ground=20;
const size=50

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx=0;
  vy=0;
}

function draw(){
  background(160, 192, 255);
  line(0,height/2,width,height/2);
  ellipse(x, y, size,size);
  
  x += vx;
  y += vy;

  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
 // if(keyIsDown(UP_ARROW)){ y -= 5; }
 // if(keyIsDown(DOWN_ARROW)){ y += 5; }
  if(keyIsDown("A".charCodeAt(0))){ x+= 10; }

  if(y<height-y-size){
    vy+=g;
  }else{
    vy=0;
    y=height-y-size;
  }
  
  if(keyIsDown("F".charCodeAt(0))&&(keyIsDown(LEFT_ARROW)||keyIsDown(UP_ARROW))){
    vx = -10;
    //vy = -10;
  } else if (keyIsDown("F".charCodeAt(0))&&(keyIsDown(RIGHT_ARROW)||keyIsDown(DOWN_ARROW))){
    vx = 10;
    //vy = 10;
  }  else {
    vx = 0;
    //vy = 0;
  }
  x=constrain(x,0,width);
  y=constrain(y,0,height);
}
function keyPressed(){
  if(key==" "){
    if(y>=height-y-size)
      vy=-jump;
  }
}
// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
