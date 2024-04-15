// var items = [2, 4, 8];
// const target = 12;
// var itemOne = items[Math.floor(Math.random()*items.length)];
// console.log(itemOne);
// var sperateItemOne = items.filter(item => item !== itemOne);
// console.log(sperateItemOne);
// let sumSeparated = sperateItemOne[0]+sperateItemOne[1];
// const summedUp=()=>{
// if(sumSeparated===target) console.log("success");
// else console.log("not get it")
// }
// summedUp();
var items = [2, 4, 8, 5, 13];
const target = 12;
var itemOne = items[Math.floor(Math.random()*items.length)];
console.log(itemOne);
var sperateFirstArray = items.filter(item => item !== itemOne);
console.log(sperateFirstArray);
var itemTwo = sperateFirstArray[Math.floor(Math.random()*sperateFirstArray.length)];
console.log(itemTwo);
const summedUp=()=>{
    if(itemOne+itemTwo===target) console.log("success:", [itemOne, itemTwo]);
    else console.log("yet not get it")
}
summedUp();