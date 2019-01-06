var mySing = (function() {
	var instance;

	function init() {
		function pm() {
			console.log('iam pm');
		}

        var pV = "Iam also private";
	var prm = Math.random();
	return {
		pm:function() {
			console.log("the public");
		},
	       publicProperty:"I am also public",
	      getRandomNumber: function() {
			return prm;
               }
       };
      }
  
     return {
	getInstance:function() {
		if(!instance) {
			instance = init();
		}
	     return instance;
       }
};
})();

var singA = mySing.getInstance();
var singB = mySing.getInstance();

console.log(singA.getRandomNumber()+"  "+singB.getRandomNumber());

