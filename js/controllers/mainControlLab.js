app.controller('MainControl', ['$scope', 'serveLab', function($scope, serveLab) { 

    
    //basic code file served   
    serveLab.success(function(data) {
        $scope.lab = data;
    });
  
      
}]);
   