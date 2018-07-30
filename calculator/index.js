//автозагрузка функций по списку
document.addEventListener('DOMContentLoaded', function() {
    classbutton();
    numberpress();
    operation();
    clearBtn();
    resultBtn();
    decimalBtn();
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
        numberpress(e.target.textContent);
      });
    }
  
    for (var i = 0; i < operations.length; i++) {
      var operationBtn = operations[i];
      operationBtn.addEventListener('click', function(e) {
        operation(e.target.textContent);
      });
    }
  
    decimalBtn.addEventListener('click', decimal);
    clearBtn.addEventListener('click', clear);
    resultBtn.addEventListener('click', result);
  
    //функции!
    function numberpress(number) {
      var displayResult;
      displayResult = document.getElementById('displayResult');
      displayResult.innerHTML = numbers.innerHTML;
      console.log('Клик по кнопке с номером ' + number + '');
    }
  
    function operation(symbol) {
      console.log('Клик по кнопке с операцией ' + symbol + '');
    }
  
    function clear(argument) {
      console.log('Клик по кнопке С');
    }
  
    function result(argument) {
      console.log('Клик по кнопке result');
    }
  
    function decimal(argument) {
      console.log('Клик по кнопке decimal');
    }
  }