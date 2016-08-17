/* global app */
app.controller('MainController', ['$scope', 
    'serveMenu', 'serveArchitecture', 'serveStatus','serveAccountInfo', 'serveRunJob',
    'serveResources', 'serveFooter'
    , function($scope, serveMenu, serveArchitecture, 
     serveStatus, serveAccountInfo, serveRunJob, serveResources, serveFooter) { 
    
    //menu array that contains all the menu items
    serveMenu.success(function(data) { 
        $scope.menu = data; 
    });
    
    //current status file served 
    serveStatus.success(function(data) {
        $scope.currStatus = data;
    });
   
    //architecture file served 
    serveArchitecture.success(function(data) {
        $scope.arch = data;
    });
    
    //Account information file served 
    serveAccountInfo.success(function(data) {
        $scope.actInfo = data;
    });
    
    //Account information file served 
    serveRunJob.success(function(data) {
        $scope.runJob = data;
    });
    
    //Resources information served 
    serveResources.success(function(data) {
        $scope.resources = data;
    });
    
    //Footer information served 
    serveFooter.success(function(data) {
        $scope.footer = data;
    });
}]);
   
   
