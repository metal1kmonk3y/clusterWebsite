app.factory('serveSubmitRun', ['$http', function($http) { 
  return $http.get('sample/submit-run.1.txt') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);