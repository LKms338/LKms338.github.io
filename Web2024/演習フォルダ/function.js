// 呼び出すと「こんにちはこんにちは」とコンソール出力する関数hello()を定義せよ
function hello(){
  console.log("こんにちはこんにちは");
}

// 呼び出すと「こんにちは${引数1}さん」とコンソール出力する引数を一つ受け取る関数helloSomeone(name)を定義せよ
function helloSomeone(name){
  console.log(`こんにちは${name}さん`);
}

// 呼び出すと円の面積を計算してコンソール出力する半径を引数として一つ受け取る関数helloCircleArea(radius)を定義せよ
function helloCircleArea(radius){
  console.log(radius * radius * Math.PI);
}

// 呼び出すと長方形の面積を計算してコンソール出力する縦と横の長さを引数として2つ受け取る関数helloRectangleArea(width, height)を定義せよ
function helloRectangleArea(width, height){
  console.log(width * height);
}

// 呼び出すと円の面積を計算して返り値として返す半径を引数として一つ受け取る関数circleArea(radius)を定義せよ
function circleArea(radius){
  return radius * radius * Math.PI;
}

// 呼び出すと長方形の面積を計算して返り値として返す縦と横の長さを引数として2つ受け取る関数rectangleArea(width, height)を定義せよ
function rectangleArea(width, height){
  return width * height;
}