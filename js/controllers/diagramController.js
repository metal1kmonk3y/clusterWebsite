app.controller('DiagramController', ['$scope', 'serveDiagrams', '$routeParams', function($scope, serveDiagrams, $routeParams) { 

    
    //basic code file served   
    serveDiagrams.success(function(data) {
        $scope.detail = data;
        $scope.diagram = $scope.detail.pics[$routeParams.id];
    });
        
       
      
}]);
   