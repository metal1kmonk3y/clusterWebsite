app.controller('MainControl', ['$scope', 'serveDiagrams', function($scope, serveDiagrams) { 

    
    //basic code file served   
    serveDiagrams.success(function(data) {
        $scope.machine = data;
    });
  
      
}]);
   