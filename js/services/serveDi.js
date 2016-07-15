app.factory('serveDi', ['$http', function($http) { 
  return $http.get('json/diagrams.json') 
            .success(function(data) { 
              return data; 
            })
            .error(function(err) { 
              return err; 
            }); 
}]);