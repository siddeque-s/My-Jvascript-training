// 1
// 12
// 123
// 1234
// 12345
// 123456
// 1234567
// 12345678
// 123456789
// 12345678910

const prompt = require("prompt-sync")();
let n = prompt("Enter no of rows");
let rows = Number(n);

for (let i = 1; i <= rows; i++) {
  let res = "";
  for (j = 1; j <= i; j++) {
    res = res + j + " ";
  }
  console.log(res);
}
