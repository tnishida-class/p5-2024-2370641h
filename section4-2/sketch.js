//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;
let LastTime=0;

function setup(){
  createCanvas(windowWidth, windowHeight);
   balls = [];
}

function draw(){
  
  background(160, 192, 255);
  if(millis()-LastTime>100){
    const b={
      x:random(width),
      y:random(height),
      size:random(10,50),
      vx:random(-3,3),
      vy:random(-3,3)
    };
    balls.push(b);
    LastTime=millis();
    }

  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
  }


function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  
  if(mag(dx, dy) > 5){// mag(x,y) はベクトル(x,y)の長さ
    const b = {
       x: mouseX, 
       y: mouseY,
       size:random(30,200),
       vx: dx, 
       vy: dy };
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}