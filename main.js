const result = document.getElementById('result');
const buttons = document.querySelectorAll('.calculator-buttons button');

// Create spark element and append to body
const spark = document.createElement('div');
spark.className = 'spark';
document.body.appendChild(spark);

buttons.forEach(button => {
    const soundId = `button-sound-${button.innerText.toLowerCase()}`;
    const audioElement = document.getElementById(soundId);
    
    button.addEventListener('click', () => {
        if (button.innerHTML === '=') {
            // Check if there is a valid calculation to be made
            if (result.value && /[0-9]+[+\-*\/][0-9]+/.test(result.value)) {
                result.value = eval(result.value);
                document.getElementById('button-sound-equals').currentTime = 0;
                document.getElementById('button-sound-equals').play(); // Play button sound for =
            } else { // No valid calculation to be made
                result.value = 'Error';
                document.getElementById('button-sound-error').currentTime = 0;
                document.getElementById('button-sound-error').play(); // Play error sound
            }
        } else if (button.innerHTML === 'C') {
            result.value = '';
            document.getElementById('button-sound-clear').currentTime = 0;
            document.getElementById('button-sound-clear').play(); // Play button sound for C
        } else if (/[\+\-\*\/]/.test(button.innerHTML)) { // test if the button is a symbol (+,-,*,/)
            result.value += button.innerHTML;
            document.getElementById('button-sound-symbol').currentTime = 0;
            document.getElementById('button-sound-symbol').play(); // Play button sound for symbols
        } else {
            result.value += button.innerHTML;
            audioElement.currentTime = 0;
            audioElement.play(); // Play button sound
        }

        // Animate spark effect
        const rect = button.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;
        spark.classList.add('animate');

        // Remove animation class after 500 milliseconds
        setTimeout(() => {
            spark.classList.remove('animate');
        }, 500);
    });
});
