calculator();

function calculator() {
  let calculation = ""; // initialize calculation in string
  let restartCalculation = false; // to track if the last action was equal operation
  renderCalculator(); // print the calculator html and regenerate the event listeners

  function renderCalculator() {
    const calculatorHtml = `
      <div class="calculator-screen bg-test">
        <input value="0" class="calculator-input bg-test roboto-condensed-numbers" type="text" readonly />
      </div>

      <div class="calculator-buttons">
        <div class="calculator-numbers roboto-condensed-numbers">
          <button class="number-buttons">C</button>
          <button class="number-buttons">CE</button>
          <button class="number-buttons">%"></button>
          <button class="number-buttons">7</button>
          <button class="number-buttons">8</button>
          <button class="number-buttons">9</button>
          <button class="number-buttons">4</button>
          <button class="number-buttons">5</button>
          <button class="number-buttons">6</button>
          <button class="number-buttons">1</button>
          <button class="number-buttons">2</button>
          <button class="number-buttons">3</button>  
          <button class="number-buttons">²</button>   
          <button class="number-buttons">0</button>
          <button class="number-buttons">.</button> 
        </div>
        <div class="calculator-operators roboto-condensed-numbers">
          <button class="operator-buttons">+</button>
          <button class="operator-buttons">-</button>
          <button class="operator-buttons">/</button>
          <button class="operator-buttons">*</button>
          <button class="operator-buttons equal-button">=</button>
        </div>
      </div>`;

    document.querySelector('.calculator-body').innerHTML = calculatorHtml; // draw the calculator html inside the parent element

    document.querySelectorAll('.number-buttons').forEach((button) => { // check for clicks of number buttons
      button.addEventListener('click', (event) => {
        const number = event.target.innerText; // get the text within the buttons
        updateCalculationScreen(number); // process the new String Calculation (handles number)
      });
    });

    document.querySelectorAll('.operator-buttons').forEach((button) => { // check for clicks of operations button
      button.addEventListener('click', (event) => {
        const operator = event.target.innerText; // get the text within the buttons
        updateCalculationScreen(operator); // process the new String Calculation (handles operations)
      });
    });
  }

  function updateCalculationScreen(value) {
    const lastValue = calculation.at(-1); // retrieve the last string value for C / CE operations

    if (value === 'C') { // delete the last value either a number or operator
      calculation = calculation.slice(0, -1);
      updateValue(); // save and show on screen
      return; 
    }

    if (value === 'CE') { // clear the string calculation
      calculation = '';
      updateValue(); // save and show on screen
      return; 
    }

    if (value === '²') { // handle squared number
      calculation = String(eval(calculation)) + '**2';
      updateValue(); // save and show on screen
      return;
    }

    if (['+', '-', '*', '/', '%'].includes(lastValue) && ['+', '-', '*', '/', '%'].includes(value)) { // handle repeat or invalid operator
      alert('Invalid operation. Please use +, -, *, or /. No repeat operation.');
      return; 
    }

    if (value === '=') { // end operation and calculate the string calculations using eval()
      calculation = String(eval(calculation).toFixed(2)); // I limit the answer to two decimal ^_^
      if (calculation === 'Infinity') { // handles divided by zero 
        alert('Error: Division by zero is not allowed.');
        calculation = '0';
      }
      restartCalculation = true; // set resetCalc to true
      updateValue(); // save and show on screen
      return; 
    }

    if (restartCalculation) { // if the last action was equal, clear the current calculation
      calculation = value; // start a new calculation
      restartCalculation = false; // set resetCalc to false
    } else {
      calculation += value; // increment the string calculation
    }

    updateValue(); // save and show on screen
  }

  function updateValue() {
    document.querySelector('.calculator-input').value = calculation || '0'; // handle early press of equal '='
  }
}
