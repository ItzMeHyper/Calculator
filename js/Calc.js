let display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.value.length < 15) {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '';
}

function dltChar() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const result = eval(display.value);
        display.value = result !== undefined ? result : '';
    } catch {
        display.value = 'Error';
    }
}