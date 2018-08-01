//autoload functions
document.addEventListener('DOMContentLoaded', function() {
  classbutton();
  });
  
  function classbutton() {
  //variables
  var numbers = document.querySelectorAll('.number');
  operations = document.querySelectorAll('.operations');
  decimal_btn = document.getElementById('decimal_btn');
  clear_btn = document.getElementById('clear_btn');
  equally_btn = document.getElementById('equally_btn');
  display = document.getElementById('display');
  //memoryCurrentNumber = 0;
  //memoryNewNumber = false;
  //memoryPendingOperation = '';
  
  for (var i = 0; i < numbers.length; i++) {
    number = numbers[i];
    number.addEventListener('click', function(e) {
    numbers_func(e.target.textContent);
    });
  }
  
  for (var i = 0; i < operations.length; i++) {
    operation_btn = operations[i];
    operation_btn.addEventListener('click', function(e) {
    operation_func(e.target.textContent);
    });
  }
  
  decimal_btn.addEventListener('click', decimal_func);
  clear_btn.addEventListener('click', clear_func);
  equally_btn.addEventListener('click', equally_func);
  
  //functions
  function numbers_func(numbers) {
    var display_result;
    display_result = document.getElementById('display_result');
    display_result.innerHTML = numbers;
    console.log('Click on button ' + numbers + '');
  }
  
  function operation_func(operations) {
    var display_result;
    display_result = document.getElementById('display_result');
    display_result.innerHTML = operations;
    console.log('Click on button ' + operations + '');
  }
  
  function clear_func(clear_btn) {
    var display_result;
    display_result = document.getElementById('display_result');
    display_result.innerHTML = 'C';
    console.log('Click on button ' + clear_btn + '');
  }
  
  function equally_func(equally_btn) {
    var display_result;
    display_result = document.getElementById('display_result');
    display_result.innerHTML = '=';
    console.log('Click on button ' + equally_btn + '');
  }
  
  function decimal_func(decimal_btn) {
    var display_result;
    display_result = document.getElementById('display_result');
    display_result.innerHTML = '.';
    console.log('Click on button ' + decimal_btn + '');
  }
}