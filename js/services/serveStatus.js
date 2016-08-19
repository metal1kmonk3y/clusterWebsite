/* global app */
app.factory('serveStatus', ['$http', function($http) { 
  return $http.get('json/current_status.json') 
            .success(function(data) { 
              console.log(data);
              return data; 
            })
            .error(function(err) { 
              return err; 
            }); 
}]);