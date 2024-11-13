function showModal(){
  document.querySelector('div#modal').innerHTML = "TEST";
}

function changeRed(){
  document.querySelector('div#modal').style.backgroundColor = "red";
}

function changeYellow(){
  document.querySelector('div#modal').style.backgroundColor = "yellow";
}

function changeGreen(){
  document.querySelector('div#modal').style.backgroundColor = "green";
}


function addCircle(){
  // 解1：愚直にinnerHTMLにつぎ足す
  // document.querySelector('div#modal').innerHTML =
  //     document.querySelector('div#modal').innerHTML + "〇";

  // 解2：appendメソッド（オブジェクトに備えられた関数）を使う
  // document.querySelector('div#modal').append("〇");

  // 解3：+=演算子（文字列結合）を使う
  document.querySelector('div#modal').innerHTML += "〇";
}

function addCross(){
  document.querySelector('div#modal').innerHTML =
      document.querySelector('div#modal').innerHTML + "×";
}

//課題4 ChatGPT
let value = 0;

function updateDisplay() {
  document.getElementById("modal").textContent = value;
}

function plusOne() {
  value += 1;
  updateDisplay();
}

function plusFive() {
  value += 5;
  updateDisplay();
}

function plusTen() {
  value += 10;
  updateDisplay();
}

//課題4 Teacher ver.

function plusOne(){
  let total = Number(document.querySelector('div#modal').innerHTML);
  document.querySelector('div#modal').innerHTML = total + 1;
}

function plusFive(){
  let total = Number(document.querySelector('div#modal').innerHTML);
  document.querySelector('div#modal').innerHTML = total + 5;
}

function plusTen(){
  let total = Number(document.querySelector('div#modal').innerHTML);
  document.querySelector('div#modal').innerHTML = total + 10;
}
