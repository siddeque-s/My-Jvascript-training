// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

const prompt = require("prompt-sync")();
let n = prompt("Enter Number");
let row = Number(n);

for (let i = 1; i <= row; i++) {
  let res = "";

  for (j = 1; j <= i; j++) {
    res = res + i + " ";
  }
  console.log(res);
}
