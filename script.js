const firstInput = document.getElementById('first-number');
const secondInput = document.getElementById('second-number');
const total = document.getElementById('total');
const button = document.getElementById('button')




button.addEventListener('click', () => {
    let firstNum = firstInput.value;
    let secondNum = secondInput.value;
    let sum = firstNum * secondNum
    total.innerText = sum;
})

