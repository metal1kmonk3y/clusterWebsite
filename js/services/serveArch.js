app.factory('serveArch', ['$http', function($http) { 
  return $http.get('http://flux.cs.uwlax.edu/~shiwakot.prasann/clusterWebsite/server/api/docs/architecture.conf') 
            .success(function(data) { 
              console.log(data);
              return data; 
            })
            .error(function(err) { 
              return err; 
            }); 
}]);