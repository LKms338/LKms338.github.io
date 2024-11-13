function doCheckAnswers() {
  const inputString = document.getElementById("input_string").value.trim();
  const answerList = document.querySelectorAll(".answer-list li");
  let answer = document.getElementById("answer");
  let isCorrect = false;

  // 各リスト項目と入力値を比較
  for (let item of answerList) {
    if (item.textContent === inputString) {
      isCorrect = true;
      break;
    }
  }

  // 結果の表示
  if (isCorrect) {
    answer.textContent = "正解";
  } else {
    answer.textContent = "不正解";
  }
}
