const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(userInput.value)
}

function creatAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  creatAndWriteOutput('+',initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  creatAndWriteOutput('-',initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  creatAndWriteOutput('/',initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  creatAndWriteOutput('*',initialResult, enteredNumber);
}


addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
