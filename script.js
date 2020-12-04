function divide(num1, num2) {
  num1 = Number(document.getElementById("firstNum").value);
  num2 = Number(document.getElementById("secNum").value);
  answer = num1 / num2
  document.getElementById("answer").value = answer
}