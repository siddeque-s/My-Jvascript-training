// *
// **
// ***
// ****
// *****

const prompt = require("prompt-sync")();
let n = prompt("Enter no of rows");
let num = Number(n);

for (i = 1; i <= n; i++) {
  let star = "";
  for (j = 1; j <= i; j++) {
    star = star + "*";
  }
  console.log(star);
}
