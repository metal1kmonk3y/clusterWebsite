/*global angular*/
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
    .otherwise({ 
      redirectTo: '/' 
    }); 
});

