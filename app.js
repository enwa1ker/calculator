let operation;

function setOperation(operator) {
    if (operation) {
        const num1 = document.getElementById("num1");
        num1.classList.add("small");
        num1.value = document.getElementById("result").textContent;
    }

    operation = operator;

    document.getElementById("num2").value = "";
    document.getElementById("result").textContent = "";
}

function calculateResult() {
    let result;
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }

    document.getElementById("result").textContent = result;
}
