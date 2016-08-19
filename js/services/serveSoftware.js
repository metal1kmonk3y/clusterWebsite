/* global app */
app.factory('serveSoftware', ['$http', function($http) { 
  return $http.get('json/software.json') 
            .success(function(data) { 
              return data; 
            })
            .error(function(err) { 
              return err; 
            }); 
}]);