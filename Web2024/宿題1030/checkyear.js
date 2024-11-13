function checkYear() {
  const year = document.getElementById("year").value;
  let message;

  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    message = year + "年は閏年（366日）です。";
  } else {
    message = year + "年は平年（365日）です。";
  }

  document.getElementById("answer").innerText = message;
}
