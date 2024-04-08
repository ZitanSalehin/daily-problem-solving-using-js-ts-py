// Write a JavaScript program to get all the indexes where NaN is found in a given array of numbers and NaN.
let givenArray = ["problem", 0, 4, NaN, 17, 30, NaN];
let indexes = [];

for(i=0; i<givenArray.length;i++){
    if(isNaN(givenArray[i])){
        indexes.push(i);
    }
}
console.log(indexes);
