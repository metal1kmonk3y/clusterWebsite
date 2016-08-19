/* global app */
app.controller('MainController', ['$scope', 
    'serveMenu', 'serveArchitecture', 'serveStatus','serveAccountInfo', 'serveRunJob',
    'serveSoftware', 'serveResources', 'serveFooter'
    , function($scope, serveMenu, serveArchitecture, serveStatus, serveAccountInfo, 
    serveRunJob, serveSoftware, serveResources, serveFooter) { 
    
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
    
    //account information file served 
    serveAccountInfo.success(function(data) {
        $scope.actInfo = data;
    });
    
    //running a job file served 
    serveRunJob.success(function(data) {
        $scope.runJob = data;
    });
    
    //running a job file served 
    serveSoftware.success(function(data) {
        $scope.soft = data;
    });
    
    //resources information served 
    serveResources.success(function(data) {
        $scope.resources = data;
    });
    
    //footer information served 
    serveFooter.success(function(data) {
        $scope.footer = data;
    });
}]);
   
   
