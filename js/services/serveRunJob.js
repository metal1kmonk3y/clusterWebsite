/* global app */
app.factory('serveRunJob', ['$http', function($http) { 
  return $http.get('json/run_job.json') 
            .success(function(data) { 
              return data; 
            })
            .error(function(err) { 
              return err; 
            }); 
}]);