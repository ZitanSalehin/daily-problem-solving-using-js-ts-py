// Write a JavaScript program to calculate the factorial of a number.
function factorial(x) {
    console.log(x);
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}

console.log(factorial(5));