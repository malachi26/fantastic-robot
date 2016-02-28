calculatorApp.controller('calcController', function($scope, calcService) {
	$scope.square = function() {
		$scope.result = calcService.square($scope.number);
	}
	$scope.add = function() {
		$scope.output = calcService.add($scope.operand1, $scope.operand2);
	}
	$scope.subtract = function() {
		this.output = calcService.subtract(this.operand1, this.operand2);
	}
	$scope.divide = function() {
		this.output = calcService.divide(this.operand1, this.operand2);
	}
	
	$scope.multiply = function() {
		this.output = calcService.multiply(this.operand1, this.operand2);
	}
	
});
