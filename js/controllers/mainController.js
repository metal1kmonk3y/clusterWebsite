/* global app */
app.controller('MainController', ['$scope', 
    'serveMenu', 'serveArchitecture', 'serveStatus','serveAccountInfo', 'serveRunJob',
    'serveSoftware', 'serveResources', 'serveFooter', '$location', '$anchorScroll'
    , function($scope, serveMenu, serveArchitecture, serveStatus, serveAccountInfo, 
    serveRunJob, serveSoftware, serveResources, serveFooter, 
    $location, $anchorScroll) { 
    
    //menu array that contains all the menu items
    serveMenu.success(function(data) { 
        $scope.menu = data; 
    });
    
    //current status file served 
    serveStatus.success(function(data) {
        $scope.currentStatus = data;
    });
   
    //architecture file served 
    serveArchitecture.success(function(data) {
        $scope.architecture = data;
    });
    
    //account information file served 
    serveAccountInfo.success(function(data) {
        $scope.accountInfo = data;
    });
    
    //running a job file served 
    serveRunJob.success(function(data) {
        $scope.runJob = data;
    });
    
    //running a job file served 
    serveSoftware.success(function(data) {
        $scope.software = data;
    });
    
    //resources information served 
    serveResources.success(function(data) {
        $scope.resources = data;
    });
    
    //footer information served 
    serveFooter.success(function(data) {
        $scope.footer = data;
    });
    
    $scope.goHere = function(str){
        $location.hash('str');
        $anchorScroll();
    } 
    
}]);
   
   
