// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  if (count<cycle/2){
    size= count+40;
  }else{
    size= (cycle-count)+40;}// BLANK[1]
  ellipse(width / 2, height / 2, size);

  if(keyIsDown(UP_ARROW)){count=(count+5)%cycle;}
}


