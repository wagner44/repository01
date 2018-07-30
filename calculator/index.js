//autoload functions
document.addEventListener('DOMContentLoaded', function() {
    classbutton();
  });
  
  function classbutton() {
    //переменные
    var numbers = document.querySelectorAll('.number');
    operations = document.querySelectorAll('.operations');
    decimalBtn = document.getElementById('decimalBtn');
    clearBtn = document.getElementById('clearBtn');
    resultBtn = document.getElementById('resultBtn');
    display = document.getElementById('display');
    //memoryCurrentNumber = 0;
    //memoryNewNumber = false;
    //memoryPendingOperation = '';
  
    for (var i = 0; i < numbers.length; i++) {
      var number = numbers[i];
      number.addEventListener('click', function(e) {
      numbersFunc(e.target.textContent);
      });
    }
  
    for (var i = 0; i < operations.length; i++) {
      var operationBtn = operations[i];
      operationBtn.addEventListener('click', function(e) {
      operationFunc(e.target.textContent);
      });
    }
  
    decimalBtn.addEventListener('click', decimalFunc);
    clearBtn.addEventListener('click', clearFunc);
    resultBtn.addEventListener('click', resultFunc);
  
    //functions
    function numbersFunc(numbers) {
      var displayResult;
      displayResult = document.getElementById('displayResult');
      displayResult.innerHTML = numbers;
      console.log('Click on button ' + numbers + '');
    }
  
    function operationFunc(operations) {
      var displayResult;
      displayResult = document.getElementById('displayResult');
      displayResult.innerHTML = operations;
      console.log('Click on button ' + operations + '');
    }
  
    function clearFunc(clearBtn) {
      var displayResult;
      displayResult = document.getElementById('displayResult');
      displayResult.innerHTML = 'C';
      console.log('Click on button ' + clearBtn + '');
    }
  
    function resultFunc(resultBtn) {
      var displayResult;
      displayResult = document.getElementById('displayResult');
      displayResult.innerHTML = '=';
      console.log('Click on button ' + resultBtn + '');
    }
  
    function decimalFunc(decimalBtn) {
      var displayResult;
      displayResult = document.getElementById('displayResult');
      displayResult.innerHTML = '.';
      console.log('Click on button ' + decimalBtn + '');
    }
  }