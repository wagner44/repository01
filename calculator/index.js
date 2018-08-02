// Autoload functions
document.addEventListener('DOMContentLoaded', function() {
  classButton();
});

function classButton() {
  // Variables
  var numbers = document.querySelectorAll('.number');
  operations = document.querySelectorAll('.operations');
  decimalBtn = document.getElementById('decimal-btn');
  clearBtn = document.getElementById('clear-btn');
  equallyBtn = document.getElementById('equally-btn');
  display = document.getElementById('display');
  // memoryCurrentNumber = 0;
  // memoryNewNumber = false;
  // memoryPendingOperation = '';

  for (var i = 0; i < numbers.length; i++) {
    number = numbers[i];
    number.addEventListener('click', function(e) {
      numbersFunc(e.target.textContent);
    });
  }

  for (var j = 0; j < operations.length; j++) {
    operationBtn = operations[j];
    operationBtn.addEventListener('click', function(e) {
      operationFunc(e.target.textContent);
    });
  }

  decimalBtn.addEventListener('click', decimalFunc);
  clearBtn.addEventListener('click', clearFunc);
  equallyBtn.addEventListener('click', equallyFunc);

  // Functions
  function numbersFunc(numbers) {
    var displayResult;
    displayResult = document.getElementById('display-result');
    displayResult.innerHTML = numbers;
    console.log('Click on button ' + numbers + '');
  }

  function operationFunc(operations) {
    var displayResult;
    displayResult = document.getElementById('display-result');
    displayResult.innerHTML = operations;
    console.log('Click on button ' + operations + '');
  }

  function clearFunc(clearBtn) {
    var displayResult;
    displayResult = document.getElementById('display-result');
    displayResult.innerHTML = 'C';
    console.log('Click on button ' + clearBtn + '');
  }

  function equallyFunc(equallyBtn) {
    var displayResult;
    displayResult = document.getElementById('display-result');
    displayResult.innerHTML = '=';
    console.log('Click on button ' + equallyBtn + '');
  }

  function decimalFunc(decimalBtn) {
    var displayResult;
    displayResult = document.getElementById('display-result');
    displayResult.innerHTML = '.';
    console.log('Click on button ' + decimalBtn + '');
  }
}
