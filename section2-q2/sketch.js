// チェッカー
function setup() {
  createCanvas(400, 400);
  let s = width / 8;
  let d = height/8;
 noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      let x=i*s;
      let y=j*s;
      if((i+j)%2===1){
        fill(122);
      rect(x,y,s,s);  
      }    // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    if(((i+j)%2===1)&&(j<3)){
      fill(255,0,0);
      ellipse(x+s/2,y+s/2,d,d);
    }
    if(((i+j)%2===1)&&(4<j)){
      fill(0);
      ellipse(x+s/2,y+s/2,d,d);
    }
  }
}
}
