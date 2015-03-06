console.log("empty line to make subsequent lines visible in console");

function roll() {
    var x = Math.random() * 6;
    x = Math.floor(x) + 1;
    return x;
}

var x = roll();
console.log("x: " + x);
var y = roll();
console.log("y: " + y);
var total = x + y;
console.log("Total: " + total);

if (x == y) {
    console.log("DOUBLE")
}