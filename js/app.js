var app = angular.module('cluster',['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'MainController', 
      templateUrl: 'js/views/home.html' 
    }) 
   .when('/flux/:id', { 
      controller: 'DiagramController', 
      templateUrl: 'js/views/diagram.html' 
    }) 
    .when('/*' , { 
      controller: 'MainController', 
      templateUrl: 'js/views/home.html' 
    }) 
    .otherwise({ 
      redirectTo: '/' 
    }); 
});

app.run(function($rootScope, $location, $anchorScroll) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    if($location.hash()) $anchorScroll();  
  });
});