app.controller('MainController', ['$scope', 'serveBasic', 'serveSubmitRun', 
    'serveMenu', 'serveDiagrams', function($scope, serveBasic, serveSubmitRun, 
    serveMenu, serveDiagrams) { 
    
    //menu array that contains all the menu items
    serveMenu.success(function(data) { 
        $scope.menu = data; 
    });
    
    //diagrams array that contains all the diagrams 
    serveDiagrams.success(function(data) { 
        $scope.machine = data; 
    });
    
    //basic code file served   
    serveBasic.success(function(data) {
        $scope.fileBasic = data;
    });
    //submit run code file served 
    serveSubmitRun.success(function(data) {
        $scope.fileSubmitRun = data;
    });
      
}]);
   