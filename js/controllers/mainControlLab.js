app.controller('MainControlLab', ['$scope', 'serveDi', '$routeParams', function($scope, serveDi, $routeParams) { 

    
    //basic code file served   
    serveDi.success(function(data) {
        $scope.detail = data[$routeParams.id];
    });
  
      
}]);
   