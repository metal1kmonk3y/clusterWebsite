/* global app */
app.factory('serveResources', ['$http', function($http) { 
  return $http.get('http://13.59.248.205/resources.json') 
            .success(function(data) { 
              return data; 
            })
            .error(function(err) { 
              return err; 
            }); 
}]);
