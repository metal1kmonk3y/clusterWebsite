/* global app */
app.factory('serveAccountInfo', ['$http', function($http) { 
  return $http.get('http://13.59.248.205/accountInfo.json') 
            .success(function(data) { 
              return data; 
            })
            .error(function(err) { 
              return err; 
            }); 
}]);
