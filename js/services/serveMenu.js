/* global app */
app.factory('serveMenu', ['$http', function($http) { 
  return $http.get('http://13.59.248.205/menuItems.json') 
            .success(function(data) { 
              return data; 
            })
            .error(function(err) { 
              return err; 
            }); 
}]);
