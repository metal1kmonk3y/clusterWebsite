/* global app */
app.factory('serveFooter', ['$http', function($http) { 
  return $http.get('json/footer.json') 
            .success(function(data) { 
              return data; 
            })
            .error(function(err) { 
              return err; 
            }); 
}]);