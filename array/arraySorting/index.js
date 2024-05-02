// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(array) {
    array.sort((a, b) => {
        if (a === 0 && b !== 0) {
            return 1;
        } else if (a !== 0 && b === 0) {
            return -1;
        } else {
            return 0;
        }
    });
    
    return array;
}

// Test the function
let result = moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
console.log(result);