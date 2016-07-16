var app = angular.module('cluster',['ngRoute','ngSanitize',
  'btford.markdown']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'MainController', 
      templateUrl: 'js/views/home.html' 
    }) 
   .when('/machine/:id', { 
       controller: 'DiagramController', 
      templateUrl: 'js/views/diagram.html' 
    }) 
    .otherwise({ 
      redirectTo: '/' 
    }); 
});