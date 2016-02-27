var studentApp = angular.module("studentApp", ['ngRoute']);
studentApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	
	when('/addStudent', {
		templateUrl: 'addStudent.html',
		controller: 'AddStudentController'
		}).
	
	when('/viewStudents', {
		templateUrl: 'viewStudents.html',
		controller: 'ViewStudentsController'
		}).
	
	otherwise({
		redirectTo: '/addStudent'
		});
	}]);

