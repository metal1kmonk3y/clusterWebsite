app.factory('serveRead' , ['$http', function($http){
    return $http.get('README.md')
                .success(function(data){
                    return data;
                })
                .error(function(err){
                    return err;
                })

}]);