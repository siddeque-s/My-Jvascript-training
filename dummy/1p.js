let num = 5;
let pattern = "";

// no star pattern for 0 or negative numbers
if (num > 1) {
    // upward hollow pyramid
    for (let i = 1; i <= num; i++) {
        // spaces before stars
        for (let j = 1; j <= (num - i); j++) {
            pattern += "  ";
        }
        // stars and hollow space
        for (let k = 1; k <= (2 * i - 1); k++) {
            if (k === 1 || k === (2 * i - 1)) {
                pattern += "* ";
            } else {
                pattern += "  ";
            }
        }
        pattern += "\n";
    }

    // downward hollow pyramid
    for (let i = num - 1; i >= 1; i--) {
        // spaces before stars
        for (let j = 1; j <= (num - i); j++) {
            pattern += "  ";
        }
        // stars and hollow space
        for (let k = 1; k <= (2 * i - 1); k++) {
            if (k === 1 || k === (2 * i - 1)) {
                pattern += "* ";
            } else {
                pattern += "  ";
            }
        }
        pattern += "\n";
    }
}

console.log(pattern);
