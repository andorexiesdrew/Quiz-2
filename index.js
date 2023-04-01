function calc() {
    let operator = document.getElementById("operator").value
    let numberOne = document.getElementById("numberOne").value
    let numberTwo = document.getElementById("numberTwo").value

    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);
    let result = document.getElementById("answer");
    
    switch(operator) {
        case '+':
            result.innerHTML = numberOne + numberTwo;
        break;
        
        case '-':
            result.innerHTML = numberOne - numberTwo;
        break;
        
        case '*':
            result.innerHTML = numberOne * numberTwo;
        break;
        
        case '/':
            result.innerHTML = numberOne / numberTwo;
        break;
        
        default:
            result.style.color="red";
            result.innerHTML = "Invalid Input";
        }

}
