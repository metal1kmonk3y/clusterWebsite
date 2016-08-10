/* global app */
app.factory('serveArch', ['$http', function($http) { 
  return $http.get('http://flux.cs.uwlax.edu/~shiwakot.prasann/clusterWebsite/server/api/architecture.json') 
            .success(function(data) { 
              console.log(data);
              return data; 
            })
            .error(function(err) { 
              return err; 
            }); 
}]);