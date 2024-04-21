// Write a JavaScript function that takes an array as input and throws a 'Error' if not matched the specific value
function checkValue(arr) {
    for (let i = 0; i < arr.length; i++) {
        try {
            if (arr[i] === 10) {
                console.log("Matched");
            } else {
                throw new Error("Not Matched");
            }
        } 
        catch (error) {
            console.error(error.message);
        }
    }
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

checkValue(inputArray);

