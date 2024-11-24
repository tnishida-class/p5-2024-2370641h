// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(270, 180);
  background("blue");
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = 135+ cos(theta) * 50;
    let y = 90 + sin(theta) * 50;
    star(x, y, 10);
  }
  
}

function star(cx, cy, r){
  beginShape();//図形の描写ヲ始める
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5-HALF_PI;//ラジアン 1/5にすると正五角形になる、2/5にすることで隣の隣の頂点に結べる。-HALF_PIEがないと開始位置がx＞0、y＝0の開始位置になり、星の一番上の点が真上に来ない
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  fill("yellow");
  noStroke();
  
  endShape(CLOSE);//図形の描写をやめる
}// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
