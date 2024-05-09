function sumOfPositives(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sum += numbers[i];
        }
    }

    return sum;
}

// Example usage:
console.log(sumOfPositives([1, -4, 7, 12, 10]));
