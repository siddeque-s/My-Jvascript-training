// *****
// *****
// *****
// *****
// *****

const prompt = require("prompt-sync")();
let n = prompt("Enter no of rows");
let rows = Number(n);

for (i = 1; i <= rows; i++) {
  let res = "";

  for (j = 1; j <= rows; j++) {
    res = res + "*";
  }

  console.log(res);
}
