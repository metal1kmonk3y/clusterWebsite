/*global app*/
app.controller('MainController', ['$scope', 'serveBasic', 'serveSubmitRun', 
    'serveMenu', 'serveArch','serveDiagrams', function($scope, serveBasic, serveSubmitRun, 
    serveMenu, serveArch, serveDiagrams) { 
    
    //menu array that contains all the menu items
    serveMenu.success(function(data) { 
        $scope.menu = data; 
    });
    
     serveDiagrams.success(function(data) {
        $scope.diagrams = data;
    });
    
    
    //basic code file served   
    serveBasic.success(function(data) {
        $scope.fileBasic = data;
    });
    //submit run code file served 
    serveSubmitRun.success(function(data) {
        $scope.fileSubmitRun = data;
    });
    
     //architecture file served 
    serveArch.success(function(data) {
        $scope.arch = data;
    });
}]);
   
   
