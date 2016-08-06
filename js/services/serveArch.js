app.factory('serveArch', ['$http', function($http) { 
  return $http.get('json/arch.json') 
            .success(function(data) { 
              return data; 
            })
            .error(function(err) { 
              return err; 
            }); 
}]);