/* global app */
app.factory('serveRunJob', ['$http', function($http) { 
  return $http.get('http://flux.cs.uwlax.edu/~shiwakot.prasann/clusterWebsite/server/api/runJob.json') 
            .success(function(data) { 
              return data; 
            })
            .error(function(err) { 
              return err; 
            }); 
}]);