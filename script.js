const firstInput = document.getElementById('first-number');
const secondInput = document.getElementById('second-number');
const total = document.getElementById('total');
const button = document.getElementById('button')


button.addEventListener('click', () => { 
    const sum = firstInput.value * secondInput.value
    total.value = sum;
})

