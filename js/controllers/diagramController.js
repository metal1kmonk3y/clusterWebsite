/* global app */
app.controller('DiagramController',['$scope', 'serveArchitecture', '$routeParams', function($scope, serveArchitecture, $routeParams) {
     
    //idx of the diagram
    var idx = $routeParams.id;
    
     //architecture file served 
    serveArchitecture.success(function(data) {
        $scope.detail = data;
        $scope.diagram = $scope.detail.nodes[idx];
    });  
    
    //next diagram, if no more next then back to first
    $scope.prev = function(){
        idx = (idx > 0) ? --idx : $scope.detail.nodes.length - 1;
        $scope.diagram = $scope.detail.nodes[idx];
    }
    
    //previous diagram, if no more next then back to first
    $scope.next = function(){
        idx = (idx < $scope.detail.nodes.length - 1) ? ++idx  : 0;
        $scope.diagram = $scope.detail.nodes[idx];
    }
      
}]);
   
  