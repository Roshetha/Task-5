let memory = 0;
let currentOperation = null;

function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    currentOperation = null;
}

function selectOperation(operation) {
    const display = document.getElementById('display');
    display.value += ' ' + operation + ' ';
    currentOperation = operation;
}

function calculateResult() {
    const display = document.getElementById('display');
    const expression = display.value;
    try {
        const result = eval(expression); // Be cautious with eval()
        display.value = result;
    } catch (e) {
        alert('Error in calculation');
        clearDisplay();
    }
}

function memoryStore() {
    const display = document.getElementById('display');
    memory = parseFloat(display.value);
}

function memoryRecall() {
    const display = document.getElementById('display');
    display.value = memory.toString();
}

function memoryClear() {
    memory = 0;
}
