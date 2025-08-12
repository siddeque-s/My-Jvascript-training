// 1
// 2 3
// 4 5 6
// 7 8 9 10

const prompt = require("prompt-sync")();
let n = prompt("Enter rows");
let row = Number(n);
let j = 1;
for (let i = 1; i <= row; i++) {
  let res = "";
  for (let k = 1; k <= i; k++) {
    res += j + " ";
    j++;
  }
  console.log(res);
}
