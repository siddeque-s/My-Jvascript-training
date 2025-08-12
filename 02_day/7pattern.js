//   1
//  234
// 56789

const prompt = require("prompt-sync")();
let n = prompt("Enter no rows");
let row = Number(n);
let count = 1;
let digits=1

for (let i = 1; i <= row; i++) {
  let space = row - i;
  let res = "";
  for (let s = 1; s <=space; s++) {
    res = res + " ";
  }
  for (let j = 1; j <= digits; j++) {
    res = res + count;
    count++;
  }
  console.log(res);
  digits=digits+2
}
