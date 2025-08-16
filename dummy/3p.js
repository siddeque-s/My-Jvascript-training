let num = 5;
let pattern = "";    //pattern string
if (num > 1) {      //no star pattern for 0 or negative numbers.
    for (let i = 1; i <=num; i++) {    //first 'for loop' for horizontal lines
        for (let j = 1; j <= (num); j++) {      //second 'for loop' to add * to pattern string
            if (i==1 || i==num || j==1 || j==num) {     //condition to make pattern hollow
                pattern += "* ";    //adding outer * to pattern string
            } else {
                pattern += "  ";    //adding spaces between * to pattern string to make it hollow
            }
        }
        pattern += "\n";    //new line after row completion
    }
    console.log(pattern);   //printing star to console
}
else {
    pattern = "Number must be greater than 1 to print star pattern.";
}
