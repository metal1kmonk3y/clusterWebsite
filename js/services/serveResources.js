/* global app */
app.factory('serveResources', ['$http', function($http) { 
  return $http.get('json/resources.json') 
            .success(function(data) { 
              return data; 
            })
            .error(function(err) { 
              return err; 
            }); 
}]);