// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46",200,200,"blue","white");
}

function balloon(t,x,y,c1,c2){
  let w = textWidth(t);
  let h = textAscent() + textDescent();//textAscent:文字の上半分,textDescent:文字の下半分のピクセル
  let p = 2;//余白
  fill(c1);
  noStroke();
  triangle(x+w,y+h,x+w+p*2,y+h+p*2,x+w-w/2,y+h+p*2+h/5);
  rect(x, y, w + p * 2, h + p * 2);//左上の座標と縦と横
  fill(c2);
  text(t, x+p, y+h + p);
}
