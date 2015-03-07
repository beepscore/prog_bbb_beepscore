console.log("empty line to make subsequent lines visible in console");

// roll a die
function roll() {
    var x = Math.random() * 6;
    x = Math.floor(x) + 1;
    return x;
}

var total = 0;
var numRolls = 1000000;

for (var i = 0; i < numRolls; i++) {
    total = total + roll();
}

console.log(total / numRolls);
