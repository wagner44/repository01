//автозагрузка функций по списку
document.addEventListener('DOMContentLoaded', function() {
    classbutton();
    numberpress;
    operationFuc;
    clearFuc;
    resultFuc;
    decimalFuc;
});

function classbutton() {
    //переменные
    var numbers = document.querySelectorAll('.number');
        operations = document.querySelectorAll('.operations');
        decimalBtn = document.getElementById('decimalBtn');
        clearBtn = document.getElementById('clearBtn');
        resultBtn = document.getElementById('resultBtn');
        display = document.getElementById('display');
        //memoryCurrentNumber = 0; //начальное значение
        //memoryNewNumber = false; //новое число
        //memoryPendingOperation = ''; //несколько операций

for (var i=0; i<numbers.length; i++) {
    var number = numbers[i];
    number.addEventListener('click', function (e) {
        numberpress(e.target.textContent);
    });
};
for (var i=0; i<operations.length; i++) {
    var operationBtn = operations[i];
    operationBtn.addEventListener('click', function (e) {
        operationFuc(e.target.textContent);
    });
};
decimalBtn.addEventListener('click', decimalFuc);
clearBtn.addEventListener('click', clearFuc);
resultBtn.addEventListener('click', resultFuc);
};

//функции!
function numberpress (numbers){
    var displayResule;
    displayResule = document.getElementById('displayResule')
    displayResule.innerHTML += numbers;
    console.log('Клик по кнопке с номером '+ numbers +'');
};
function operationFuc (operations){
    var displayResule;
    displayResule = document.getElementById('displayResule')
    displayResule.innerHTML += operations;
    console.log('Клик по кнопке с операцией '+ operations +'');
};
function clearFuc (clearBtn){
    var displayResule;
    displayResule = document.getElementById('displayResule')
    displayResule.innerHTML = '';
    console.log('Клик по кнопке С');
};
function resultFuc (argument){
    console.log('Клик по кнопке result');
};
function decimalFuc (decimalBtn){
    var displayResule;
    displayResule = document.getElementById('displayResule')
    displayResule.innerHTML += '.';
    console.log('Клик по кнопке .');
};
