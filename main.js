const result = document.getElementById('result');
const buttons = document.querySelectorAll('.calculator-buttons button');
var operatorUsed = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerHTML === '=') {
            result.value = eval(result.value);
            operatorUsed = false; // Reset operatorUsed after evaluation
        } 
        else if (button.innerHTML === 'C') {
            result.value = '';
            operatorUsed = false; // Reset operatorUsed after clear
        }
        else if (["+","-","*","/"].indexOf(button.innerHTML) > -1){
            if (!operatorUsed){
                result.value += button.innerHTML;
                operatorUsed = true;
            }
            else {
                result.value = result.value.slice(0, -1) + button.innerHTML; // Replace last operator used
            }
        }
        else {
            result.value += button.innerHTML;
            operatorUsed = false; // Reset operatorUsed after number key press
        }
    });
});
