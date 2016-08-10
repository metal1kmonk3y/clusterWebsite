/* global app */
app.controller('MainController', ['$scope', 'serveBasic', 'serveSubmitRun', 
    'serveMenu', 'serveArch','serveDiagrams', 'serveStatus','serveAccountInfo'
    , function($scope, serveBasic, serveSubmitRun, serveMenu, serveArch, 
    serveDiagrams, serveStatus, serveAccountInfo) { 
    
    //menu array that contains all the menu items
    serveMenu.success(function(data) { 
        $scope.menu = data; 
    });
    
    //diagrams file served 
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
    
     //architecture file served 
    serveStatus.success(function(data) {
        $scope.currStatus = data;
    });
    
    //Account information file served 
    serveAccountInfo.success(function(data) {
        $scope.actInfo = data;
    });
}]);
   
   
