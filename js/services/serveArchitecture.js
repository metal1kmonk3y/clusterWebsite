/* global app */
app.factory('serveArchitecture', ['$http', function($http) { 
  return $http.get('json/architecture.json') 
            .success(function(data) { 
              return data; 
            })
            .error(function(err) { 
              return err; 
            }); 
}]);