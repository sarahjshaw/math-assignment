function subtract(num1, num2) {
    num1 = Number(document.getElementById("numOne").value);
    num2 = Number(document.getElementById("numTwo").value);
    result = num1 - num2
    document.getElementById("result").value = result
  }
    
      
    
     
    
    



function getAddition(firstNum, secondNum){
    num1 = Number(document.getElementById('firstNum').value);
    num2 = Number(document.getElementById('secondNum').value);
    console.log(firstNum);
    console.log(secondNum);
    answer = num1 + num2
    document.getElementById("equal").value = answer
}




// const getAddition = (firstNum, secondNum) => {
//     let firstNum = document.getElementById('firstNum').value;
//     let secondNum = document.getElementById('secondNum').value;
//     let equal = document.getElementById('equal');

//     let answer = (firstNum + secondNum)
//     equal.value = answer;
// }

// let addButton = document.querySelector('.addition');
// addButton.addEventListener('click', getAddition);



// const button = document.querySelector('#button')

// button.addEventListener('click', () => { 
//     const firstInput = document.getElementById('first-number');
//     const secondInput = document.getElementById('second-number');
//     const total = document.getElementById('total');
//     const sum = firstInput.value * secondInput.value
//     total.value = sum;
// })

function getTotal() {
  const firstInput = document.getElementById('first-number');
  const secondInput = document.getElementById('second-number');
  const total = document.getElementById('total');
  const sum = firstInput.value * secondInput.value
  total.value = sum; 
}
