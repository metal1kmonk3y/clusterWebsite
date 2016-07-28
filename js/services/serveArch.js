app.factory('serveArch', ['$http', function($http) { 
  return $http.get('http://127.0.0.1:9099/docs/architecture.json') 
            .success(function(data) { 
              return data; 
            })
            .error(function(err) { 
              return err; 
            }); 
}]);