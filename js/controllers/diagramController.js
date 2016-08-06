app.controller('DiagramController',['$scope', 'serveArch', '$routeParams', function($scope,serveArch, $routeParams) { 

    
  
        
      //architecture file served 
    serveArch.success(function(data) {
        $scope.detail = data;
        $scope.diagram = $scope.detail.nodes[$routeParams.id];
       
    });  
    
    idx = $routeParams.id;
    
    $scope.prev = function(){
       
        idx = (idx > 0) ? --idx : $scope.detail.nodes.length - 1;
        $scope.diagram = $scope.detail.nodes[idx];
       
    }
    
    
    $scope.next = function(){
        idx = (idx < $scope.detail.nodes.length - 1) ? ++idx  : 0;
        $scope.diagram = $scope.detail.nodes[idx];
    }
      
}]);
   
  