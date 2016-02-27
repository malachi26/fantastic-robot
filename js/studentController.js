var mainApp = angular.module("mainApp", []);

mainApp.controller("studentController",
	function ($scope) {
		$scope.student = {
			firstName: "Mahesh",
			lastName: "Parashar",
			fullName: function() {
				return this.firstName + " " + this.lastName;
			}
		}
	});

