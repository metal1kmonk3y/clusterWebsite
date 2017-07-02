/* global app */
app.factory('serveRunJob', ['$http', function($http) { 
  return $http.get('http://13.59.248.205/runJob.json') 
            .success(function(data) { 
              return data; 
            })
            .error(function(err) { 
              return err; 
            }); 
}]);
