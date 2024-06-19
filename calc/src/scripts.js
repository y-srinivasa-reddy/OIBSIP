function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    let display = document.getElementById('result');
    display.value += value;
}

function calculate() {
    try {
        let display = document.getElementById('result');
        display.value = eval(display.value.replace('^', '**'));
    } catch (e) {
        alert('Invalid expression');
    }
}
