/* global app */
app.factory('serveMenu', ['$http', function($http) { 
  return $http.get('json/menu_items.json') 
            .success(function(data) { 
              return data; 
            })
            .error(function(err) { 
              return err; 
            }); 
}]);