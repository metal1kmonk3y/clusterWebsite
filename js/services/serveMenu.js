/* global app */
app.factory('serveMenu', ['$http', function($http) { 
  return $http.get('json/menuItems.json') 
            .success(function(data) { 
              return data; 
            })
            .error(function(err) { 
              return err; 
            }); 
}]);