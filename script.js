let displayValue = '0';
        
function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

function appendToDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function backspace() {
    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
    } else {
        displayValue = '0';
    }
    updateDisplay();
}

function calculate() {
    try {
        let expression = displayValue.replace(/\*/g, '*').replace(/\//g, '/');
        let result = eval(expression);
        if (!isFinite(result)) {
            displayValue = 'Error';
        } else {
            displayValue = parseFloat(result.toFixed(10)).toString();
        }
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}