calculatorApp.factory('MathService', function() {
	var factory = {};
	
	factory.multiply = function(a,b) {
		return a * b;
	}
	factory.add = function(a,b) {
		return a + b;
	}
	factory.subtract = function(a,b) {
		return a - b;
	}
	factory.divide = function(a, b) {
		return a / b;
	}
	
	return factory;
});

calculatorApp.service('calcService', function(MathService){
	this.square = function(a) {
		return MathService.multiply(a,a);
	}
	this.add = function (a,b) {
		return MathService.add(a,b);
	}
	this.subtract = function(a, b) {
		return MathService.subtract(a,b);
	}
	this.divide = function (a, b) {
		return MathService.divide(a, b);
	}
	this.multiply = function (a, b) {
		return MathService.multiply(a, b);
	}
});

