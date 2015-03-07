// require returns an object
var b = require("bonescript");

// USR0 led
b.pinMode("USR0", b.OUTPUT);
var ledOff = 0;
var ledOn = 1;

b.digitalWrite("USR0", ledOff);
//b.digitalWrite("USR0", ledOn);