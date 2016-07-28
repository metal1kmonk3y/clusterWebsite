app.factory('serveBasic', ['$http', function($http) { 
  return $http.get('sample/basic.txt') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);