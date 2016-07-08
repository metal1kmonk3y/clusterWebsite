app.controller('MainController', ['$scope','serveBasic', 'serveSubmitRun' , function($scope, serveBasic, serveSubmitRun) { 
    //title of web page
    $scope.title = 'Flux Cluster'; 
    //menu array that contains all the menu items
    $scope.menu = [
        {
        name: "Current Status",
        link:  "#status"
        },
        {
        name: "Architecture of Machine",
        link:  "#hwloc"
        },
        {
        name: "Getting an Account",
        link:  "#account"
        },
        {
        name: "Running a Job",
        link:  "#job"
        },
        {
        name: "Available Software",
        link:  "#slurm"
        },
        {
        name: "Resources",
        link:  "#resources"
        }
    ];
    
    //diagrams array that contains all the diagrams 
    $scope.diagrams= [
        {
        name: "Flux",
        source: "img/flux.pdf"
        },
        {
        name: "Flux1",
        source: "img/flux1.pdf"
        },
        {
        name: "Flux2",
        source: "img/flux2.pdf"
        },
        {
        name: "Flux3",
        source: "img/flux3.pdf"
        },
        {
        name: "Flux4",
        source: "img/flux4.pdf"
        }
    ];
        
    //basic code file served   
    serveBasic.success(function(data) {
        $scope.fileBasic = data;
    });
    //submit run code file served 
    serveSubmitRun.success(function(data) {
        $scope.fileSubmitRun = data;
    });
      
}]);
   