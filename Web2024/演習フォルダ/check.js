function checkNumber(){
  if(Number(document.querySelector('#num').value) != 100){
    window.alert("true");
  }else{
    window.alert("false");
  }
}
function checkAge(){
  let age = Number(document.querySelector("#age").value);
  let answer = document.querySelector("#answer");

  // 数値が0以下なら「エラー」と表示
  if(age <= 0){
    answer.innerHTML = 'エラー';
    // 数値が20より小さいなら「未成年」と表示
  }else if(age < 20){
    answer.innerHTML = '未成年';
    // 数値が20以上なら「成人」と表示
    // -> 数値が65より小さければ成人
  }else if(age < 65){
    answer.innerHTML = '成人';
    // 数値が65以上なら「高齢者」と表示
    // -> もう65以上の値しか存在し得ないので条件式は不要
  }else{
    answer.innerHTML = '高齢者';
  }
}