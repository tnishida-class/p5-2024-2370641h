// 小手調べ
function setup() {
  createCanvas(120,120);
  background(255);
  noFill();
  for(let i =0; i<10; i++){
    let d =(i+1)*10;
    if(i<5){
      stroke(0,0,225);
    }else{
      stroke(225,0,0);
    }
    ellipse(width/2,height/2,d,d);
  }
}

  

