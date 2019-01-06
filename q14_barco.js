var events  = require('events');
var eventEmitter = new events.EventEmitter();


var ch = function connected() {
	console.log("Successfully Connected");
        eventEmitter.emit('data_recieved');
}

eventEmitter.on('data_recevied',function() {

	console.log("data received");
});

eventEmitter.emit("Connetion");

console.log("Program Ended");

 console.log("------- another q =======");
console.log("This is first");

setImmediate(function() {
	console.log("THis is second");
});

console.log("This is third");

console.log("========= q1 =====");

var bf1 = new Buffer("India is diverse nation");

var bf2 = new Buffer("Unity is diversity is Observed");

var bf3 = Buffer.concat([bf1,bf2]);
console.log(bf3);

console.log("===End=====");
console.log('' == '0');
console.log(0 == '');
console.log(0 == '0');


