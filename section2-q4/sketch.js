// ギリシャ国旗
//function setup() {
 // const blue = color(0, 51, 160);
  //const white =color(255,255,253);
  //createCanvas(270, 180);
  // noStroke();
  //background(255);

  //let d = height / 9; // 縞1本の太さ
   //noStroke();
  //for(let i = 0; i < 9; i++){
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
    //if((i%2)===1){
      //fill(white);
      //rect(0, i * d, width, (i + 1) * d);
    //}else{
      //fill(blue);
      //rect(0, i * d, width, (i + 1) * d);
    //}
  //}

  //fill(blue);
  //let size = d * 5;
  //rect(0, 0, size, size);

  //fill(255);
  // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
  //rect(size/2-d*0.5,0,d,size);
  //rect(0,size/2-d*0.5,size,d);
//}


function setup() {
  createCanvas(270, 180);
  background("red");
  
  noStroke();
  quad(0,0,55,0,55,180,0,180);
  
  let d = height/5;
 for(let i=0; i<5; i++){
   fill("white");
   triangle(55,i*d,55,(i+1)*d,100,((i*2+1)*d)/2);
   
 }
  
}
