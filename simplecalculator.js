
function getOperator() {
  let operator = prompt('Enter operator (either +, -, *, or /)');
  while (!['+', '-', '*', '/'].includes(operator)) {
    operator = prompt('Invalid operator. Please enter either +, -, *, or /');
  }
  return operator;
}

function getNumber(promptMessage) {
  let number = parseFloat(prompt(promptMessage));
  while (isNaN(number)) {
    number = parseFloat(prompt('Invalid number. Please enter a valid number'));
  }
  return number;
}

function calculateResult(operator, number1, number2) {
  let result;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      result = number1 / number2;
      break;
  }
  return result;
}

function main() {
  const operator = getOperator();
  const number1 = getNumber('Enter first number: ');
  const number2 = getNumber('Enter second number: ');
  const result = calculateResult(operator, number1, number2);
  alert(`${number1} ${operator} ${number2} = ${result}`);
}

main();
