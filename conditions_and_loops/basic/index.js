function makeNegative(number) {
    // Check if the number is already negative or zero
    if (number >= 0) {
        return -number; // If positive, return its negative value
    } else {
        return number; // If negative, return the number itself
    }
}

// Examples
console.log(makeNegative(1));    // Output: -1
console.log(makeNegative(-5));   // Output: -5
console.log(makeNegative(0));    // Output: 0
console.log(makeNegative(0.12)); // Output: -0.12
