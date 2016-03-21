
	//var calculatorApp = angular.module("calculatorApp", []);
	calculatorApp.controller('calcController', function($scope, calcService) {
		$scope.squared = function() {
			$scope.result = $scope.square($scope.number);
			$scope.showSquares = true;
			$scope.showMultiplicationTable = false;
		}
		$scope.add = function() {
			$scope.output = calcService.add($scope.operand1, $scope.operand2);
			$scope.showMultiplicationTable = false;
			$scope.showSquares = false;
		}
		$scope.subtract = function() {
			this.output = calcService.subtract(this.operand1, this.operand2);
			$scope.showMultiplicationTable = false;
			$scope.showSquares = false;
		}
		$scope.divide = function() {
			this.output = calcService.divide(this.operand1, this.operand2);
			$scope.showMultiplicationTable = false;
			$scope.showSquares = false;
		}
		
		$scope.multiply = function() {
			this.output = calcService.multiply(this.operand1, this.operand2);
			$scope.showMultiplicationTable = true;
			$scope.showSquares = false;
		}
		
		$scope.square = function(i) {
			return calcService.square(i);
		}
		
		var arrayLength = 100;
		var k = new Array(100);
		 for (var i = 0; i < arrayLength; i++) {
			k[i] = i;
		 }		
		$scope.k = k;
		
		
	});
