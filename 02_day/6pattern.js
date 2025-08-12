//     1
//    123
//   12345
//  1234567
// 123456789

const prompt = require("prompt-sync")();
let n = prompt("Enter no rows");
let row = Number(n);
let count = 1;

for (i = 1; i <= row; i++) {
  let res = "";
  let spaces = row - i;
  for (s = 1; s <= spaces; s++) {
    res = res + " ";
  }
  for (j = 1; j <= count; j++) {
    res = res + j;
  }
  count = count + 2;
  console.log(res);
}
