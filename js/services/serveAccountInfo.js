/* global app */
app.factory('serveAccountInfo', ['$http', function($http) { 
  return $http.get('json/account_info.json') 
            .success(function(data) { 
              return data; 
            })
            .error(function(err) { 
              return err; 
            }); 
}]);