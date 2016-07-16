app.factory('serveStatus' , ['$http', function($http){
    return $http.get('http://flux.cs.uwlax.edu/ganglia/')
                .success(function(data){
                    return data;
                })
                .error(function(err){
                    return err;
                })

}]);