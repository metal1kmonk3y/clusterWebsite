/* global app */
app.factory('serveSoftware', ['$http', function($http) { 
  return $http.get('http://13.59.248.205/software.json') 
            .success(function(data) { 
              return data; 
            })
            .error(function(err) { 
              return err; 
            }); 
}]);
