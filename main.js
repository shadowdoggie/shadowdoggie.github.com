const result = document.getElementById('result');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerHTML === '=') {
            result.value = eval(result.value);
        } else if (button.innerHTML === 'C') {
            result.value = '';
        } else {
            result.value += button.innerHTML;
        }
    });
});
