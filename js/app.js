var app = angular.module('cluster',['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'MainController', 
      templateUrl: 'js/views/home.html' 
    }) 
   .when('/machine/:id', { 
       controller: 'MainControlLab', 
      templateUrl: 'js/views/diagram.html' 
    }) 
    .otherwise({ 
      redirectTo: '/' 
    }); 
});