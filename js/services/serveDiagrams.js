app.factory('serveDiagrams', ['$http', function($http) { 
  return $http.get('json/hwlocDiagrams.json') 
            .success(function(data) { 
              return data; 
            })
            .error(function(err) { 
              return err; 
            }); 
}]);