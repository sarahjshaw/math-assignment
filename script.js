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
