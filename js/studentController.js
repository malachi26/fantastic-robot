mainApp.controller("studentController", function($scope) {
   $scope.student = {
      firstName: "Mahesh",
      lastName: "Parashar",
      fees:500,
      
      subjects:[
         {name:'Physics',marks:70},
         {name:'Chemistry',marks:80},
         {name:'Math',marks:65},
         {name:'English',marks:75},
         {name:'Hindi',marks:67}
      ],
      
      fullName: function() {
         return this.firstName + " " + this.lastName;
      }
   };
   
   $scope.reset = function() {
		$scope.firstName = "Lyle";
		$scope.lastName = "Hart";
		$scope.email = "fake@email.com";
	}
	
	$scope.reset();	
};
