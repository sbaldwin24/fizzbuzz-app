var fizzBuzz = function() {
	for (var i = 0; i <= 100; i++) {
		if(i % 3 && i % 5) {
			console.log(i);
		} else if (i % 3) {
			console.log("Fizz");
		} else if (i % 5) {
			console.log("Buzz");
		} else {
			console.log("FizzBuzz");
		}
	}
}();