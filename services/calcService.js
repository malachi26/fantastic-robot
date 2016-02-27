calculatorApp.factory('MathService', function() {
	var factory = {};
	
	factory.multiply = function(a,b) {
		return a * b
	}
	return factory;
});

calculatorApp.service('calcService', function(MathService){
	this.square = function(a) {
		return MathService.multiply(a,a);
	}
});