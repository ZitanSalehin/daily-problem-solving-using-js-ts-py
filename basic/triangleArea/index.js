// Write a JavaScript program to find the area of a triangle where three sides are 6, 7, 8

function calculateTriangleArea(side1, side2, side3) {
    let s = (side1 + side2 + side3) / 2;
    let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

    return area;
}

let side1 = 6;
let side2 = 7;
let side3 = 8;

let area = calculateTriangleArea(side1, side2, side3);
console.log("Area of the triangle:", area);

