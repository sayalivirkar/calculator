let display = document.getElementById('display');

// Append number to the display
function appendNumber(number) {
  display.value += number;
}

// Append operator to the display
function appendOperator(operator) {
  const lastChar = display.value.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar)) return;
  display.value += operator;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Remove the last character (backspace)
function backspace() {
  display.value = display.value.slice(0, -1);
}

// Perform the calculation
function calculate() {
  try {
    display.value = eval(display.value.replace('×', '*').replace('÷', '/'));
  } catch {
    display.value = 'Error';
  }
}
