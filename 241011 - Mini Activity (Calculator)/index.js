calculator();

function calculator() {
  let calculation = "";
  renderCalculator();

  function renderCalculator() {
    const calculatorHtml = `
      <div class="calculator-screen bg-test">
        <input value="0" class="calculator-input bg-test roboto-condensed-numbers" type="text" readonly />
      </div>

      <div class="calculator-buttons">
        <div class="calculator-numbers roboto-condensed-numbers">
          <button class="number-buttons">C</button>
          <button class="number-buttons">CE</button>
          <button class="number-buttons">%</button>
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

    document.querySelector('.calculator-body').innerHTML = calculatorHtml;

    document.querySelectorAll('.number-buttons').forEach((button) => {
      button.addEventListener('click', (event) => {
        const number = event.target.innerText;
        updateCalculationScreen(number);
      });
    });

    document.querySelectorAll('.operator-buttons').forEach((button) => {
      button.addEventListener('click', (event) => {
        const operator = event.target.innerText;
        updateCalculationScreen(operator);
      });
    });
  }

  function updateCalculationScreen(value) {
    const lastValue = calculation.at(-1);

    if (value === 'C') {
      calculation = calculation.slice(0, -1);
      updateValue();
      return; 
    }

    if (value === 'CE') {
      calculation = '';
      updateValue();
      return; 
    }

    if (value === '²') {
      calculation = String(eval(calculation)) + '**2';
      updateValue();
      return;
    }

    if (['+', '-', '*', '/'].includes(lastValue) && ['+', '-', '*', '/'].includes(value)) {
      // Optionally notify the user about consecutive operators
      return; 
    }

    if (value === '=') {
      try {
        calculation = String(eval(calculation)) || ''; 
      } catch (e) {
        calculation = ''; 
        alert('Invalid calculation');
      }
      updateValue();
      return; 
    }

    calculation += value; 
    updateValue();
  }

  function updateValue() {
    document.querySelector('.calculator-input').value = calculation || '0'; 
  }
}
