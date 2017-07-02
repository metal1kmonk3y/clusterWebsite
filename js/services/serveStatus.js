/* global app */
app.factory('serveStatus', ['$http', function($http) { 
  return $http.get('http://13.59.248.205/currentStatus.json') 
            .success(function(data) { 
              console.log(data);
              return data; 
            })
            .error(function(err) { 
              return err; 
            }); 
}]);
