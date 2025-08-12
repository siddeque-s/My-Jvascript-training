// 12345
// 1234
// 123
// 12
// 1

const prompt = require("prompt-sync")();
let n = prompt("Enter no rows");
let row = Number(n);

for (i = row; i >= 1; i--) {
  let res = "";

  for (j = 1; j <= i; j++) {
    res = res + j + " ";
  }
  console.log(res);
}
