/* global app */
app.factory('http://flux.cs.uwlax.edu/~shiwakot.prasann/clusterWebsite/server/api/architecture.json', ['$http', function($http) { 
  return $http.get('json/architecture.json') 
            .success(function(data) { 
              return data; 
            })
            .error(function(err) { 
              return err; 
            }); 
}]);