app.factory('serveLab' , ['$http', function($http){
    return $http.get('json/lab.json')
                .success(function(data){
                    return data;
                })
                .error(function(err){
                    return err;
                })

}]);