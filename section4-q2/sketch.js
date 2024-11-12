// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }

  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  for(let i = 0; i < scores.length; i++){ total += scores[i]; }


cx=width/2;
cy=height/2;
const r =min(width,height);

let start=0;
for(let i =0;i<scores.length;i++){
  let angle=scores[i]/total*TWO_PI
  arc(cx,cy,r,r,start,start+angle,PIE);
  start+=angle;
  text(scores[i].toPrecision(3));
}
  // BLANK[1]
}
