// ① 0から10000までの総和を計算して表示する
function doLoop(){
  let i = 0;
  let total = 0;
  while(i <= 10000){
    total = total + i;
    i++;
  }
  document.querySelector('#answer').innerHTML = total;
}


