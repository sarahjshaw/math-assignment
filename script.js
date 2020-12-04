function subtract(num1, num2){
    let box1=Number(document.getElementById("num1").value);
    let box2=Number(document.getElementById("num2").value);
    let box3=Number(document.getElementById("result"));
    

    let result = box1 - box2;
    box3.innerText=result;
    
}

