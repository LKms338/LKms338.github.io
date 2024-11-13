function doLoop() {
  let answer = document.getElementById("answer");
  answer.innerHTML = ""; // 結果表示エリアを初期化

  // 0から10000までの総和を計算する
  let sum1 = 0;
  for (let i = 0; i <= 10000; i++) {
    sum1 += i;
  }
  answer.innerHTML += `<p>0から10000までの総和: ${sum1}</p>`;

  // 0から10000までを足していき、合計値が50000を超えた時の値を計算する
  let sum2 = 0;
  let i = 0;
  while (i <= 10000) {
    sum2 += i;
    if (sum2 > 50000) {
      break;
    }
    i++;
  }
  answer.innerHTML += `<p>合計が50000を超えたときの値: ${i}</p>`;

  // 1から100までのFizzBuzz
  let fizzBuzzResult = "<p>1から100までのFizzBuzz:</p>";
  for (let j = 1; j <= 100; j++) {
    if (j % 3 === 0 && j % 5 === 0) {
      fizzBuzzResult += "<p>FizzBuzz</p>";
    } else if (j % 3 === 0) {
      fizzBuzzResult += "<p>Fizz</p>";
    } else if (j % 5 === 0) {
      fizzBuzzResult += "<p>Buzz</p>";
    } else {
      fizzBuzzResult += `<p>${j}</p>`;
    }
  }
  answer.innerHTML += fizzBuzzResult;
}
