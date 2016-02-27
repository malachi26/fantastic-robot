calculatorApp.controller('calcController', function($scope, calcService) {
	$scope.square = function() {
		$scope.result = calcService.square($scope.number);
	}
});
