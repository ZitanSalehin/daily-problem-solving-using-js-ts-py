let num = Math.ceil(Math.random() * 10);

let guess = prompt("Guess a number between 0 to 10");

if (guess == num) {
    document.getElementById('result').textContent = 'Congratulations! You guessed the correct number.';
} else {
    document.getElementById('result').textContent = `Sorry, the correct number was ${num}.`;
}
