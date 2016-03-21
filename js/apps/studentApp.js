var studentApp = angular.module("studentApp", ['ngRoute']);
studentApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	
	when('/addStudent', {
		templateUrl: 'views/addStudent.html',
		controller: 'AddStudentController'
		}).
	
	when('/viewStudents', {
		templateUrl: 'views/viewStudents.html',
		controller: 'ViewStudentsController'
		}).
	
	otherwise({
		redirectTo: '/addStudent'
		});
	}]);

