
	//var calculatorApp = angular.module("calculatorApp", []);
	calculatorApp.controller('calcController', function($scope, calcService) {
		this.squared = function() {
			this.result = this.square(this.number);
			this.showSquares = true;
			this.showMultiplicationTable = false;
		}
		this.add = function() {
			this.output = calcService.add(this.operand1, this.operand2);
			this.showMultiplicationTable = false;
			this.showSquares = false;
		}
		this.subtract = function() {
			this.output = calcService.subtract(this.operand1, this.operand2);
			this.showMultiplicationTable = false;
			this.showSquares = false;
		}
		this.divide = function() {
			this.output = calcService.divide(this.operand1, this.operand2);
			this.showMultiplicationTable = false;
			this.showSquares = false;
		}
		
		this.multiply = function() {
			this.output = calcService.multiply(this.operand1, this.operand2);
			this.showMultiplicationTable = true;
			this.showSquares = false;
		}
		
		this.square = function(i) {
			return calcService.square(i);
		}
		
		this.arrayLength = 25;
		this.operandArray = new Array(this.arrayLength);
		for (var i = 0; i < this.arrayLength; i++) {
			this.operandArray[i] = i;
		}		
		//k = k;
	});
