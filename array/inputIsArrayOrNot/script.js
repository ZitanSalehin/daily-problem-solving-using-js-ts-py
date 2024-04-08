// Write a JavaScript function to check whether an 'input' is an array or not.
let input = prompt('Give your input');

if (Array.isArray(JSON.parse(input))) {
    alert('Your input is an array!');
} else {
    alert('Your input is not an array!');
}

