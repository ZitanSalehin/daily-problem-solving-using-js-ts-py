var items = [2, 4, 8];
const target = 12;
var itemOne = items[Math.floor(Math.random()*items.length)];
console.log(itemOne);
var sperateItemOne = items.filter(item => item !== itemOne);
console.log(sperateItemOne);
let sumSeparated = sperateItemOne[0]+sperateItemOne[1];
const summedUp=()=>{
if(sumSeparated===target) console.log("success");
else console.log("not get it")
}
summedUp();