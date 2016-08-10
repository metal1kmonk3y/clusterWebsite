/* global app */
app.factory('serveDiagrams', ['$http', function($http) { 
  return $http.get('http://flux.cs.uwlax.edu/~shiwakot.prasann/clusterWebsite/server/api/diagrams.json') 
            .success(function(data) { 
              return data; 
            })
            .error(function(err) { 
              return err; 
            }); 
}]);