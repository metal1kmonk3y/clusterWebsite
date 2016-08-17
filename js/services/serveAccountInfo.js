/* global app */
app.factory('http://flux.cs.uwlax.edu/~shiwakot.prasann/clusterWebsite/server/api/accountInfo.json', ['$http', function($http) { 
  return $http.get('json/account_info.json') 
            .success(function(data) { 
              return data; 
            })
            .error(function(err) { 
              return err; 
            }); 
}]);