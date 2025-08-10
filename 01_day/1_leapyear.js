// Check if a year is a leap year, but also print:

// "Ancient" if year < 1000

// "Modern" if year is between 1000 and 2000

// "Future" if year > 2000

let year = 1000;

if (year % 400 == 0) {
  console.log(`${year} is a leap year`);
  if (year < 1000) {
    console.log("Ancient");
  } else if (year >= 1000 && year <= 2000) {
    console.log("Modern");
  } else {
    console.log("Future");
  }
} else if (year % 4 == 0 && year % 100 != 0) {
  console.log(`${year} is a leap year`);
  if (year < 1000) {
    console.log("Ancient");
  } else if (year >= 1000 && year <= 2000) {
    console.log("Modern");
  } else {
    console.log("Future");
  }
} else {
  console.log(`${year} is a not leap year`);
  if (year < 1000) {
    console.log("Ancient");
  } else if (year >= 1000 && year <= 2000) {
    console.log("Modern");
  } else {
    console.log("Future");
  }
}
