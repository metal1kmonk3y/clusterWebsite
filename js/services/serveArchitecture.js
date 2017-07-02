/* global app */
app.factory('serveArchitecture', ['$http', function($http) { 
  return $http.get('http://13.59.248.205/architecture.json') 
            .success(function(data) { 
              return data; 
            })
            .error(function(err) { 
              return err; 
            }); 
}]);
