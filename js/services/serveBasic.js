app.factory('serveBasic', ['$http', function($http) { 
  return $http.get('sample/basic.1.txt') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);