var elnumberForm = document.querySelector('.number__form');
var elnumberInput = document.querySelector('.number__input');
var elnumberResult = document.querySelector('.result');

elnumberForm.addEventListener('submit', function(evt){
    evt.preventDefault();

    var inputValue = Number(elnumberInput.value.trim());

    if(inputValue % 3 == 0 && inputValue % 5 ==0 ){
        elnumberResult.textContent = `FizzBuzz`;
    }else if(inputValue % 3 == 0){
        elnumberResult.textContent = `Fizz`;
    }else if(inputValue % 5 == 0){
        elnumberResult.textContent = `Buzz`;
    }
})