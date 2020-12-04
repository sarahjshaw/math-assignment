<<<<<<< HEAD
function subtract(num1, num2){
    let box1=Number(document.getElementById("num1").value);
    let box2=Number(document.getElementById("num2").value);
    let box3=Number(document.getElementById("result"));
    

    let result = box1 - box2;
    box3.innerText=result;
    
}

=======
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
>>>>>>> 4004b85e0b1d3f8c4feda0aaed6fcda067a06087
