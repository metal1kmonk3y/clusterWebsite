/* global app */
app.factory('serveFooter', ['$http', function($http) { 
  return $http.get('http://13.59.248.205/footer.json') 
            .success(function(data) { 
              return data; 
            })
            .error(function(err) { 
              return err; 
            }); 
}]);
