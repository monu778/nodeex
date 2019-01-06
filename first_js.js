const arr=[10,12,15,21];
console.time();
for(var i=0;i<arr.length;i++) {
	setTimeout(function() {
		console.log('Index: '+i+',element:'+arr[i]);
	},3000);
}
console.timeend();


