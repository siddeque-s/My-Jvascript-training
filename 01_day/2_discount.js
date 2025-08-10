// Take the total bill amount as input.

// Apply discount rules:

// Above ₹5000 → 20% off

// Above ₹2000 but ≤ ₹5000 → 10% off

// Else → no discount.

// Print the discounted price.

let amt = 5000;
let dis;

if (amt > 5000) {
  dis = (amt * 20) / 100;
  amt = amt - dis;
  console.log(amt);
} else if (amt > 2000 && amt <= 5000) {
  dis = (amt * 10) / 100;
  amt = amt - dis;
  console.log(amt);
} else {
  console.log("no discount");
}
