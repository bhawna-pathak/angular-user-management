angular.module('myApp')
    .controller('profileCtrl', ProfileCtrl)
    .controller('AlbumCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
        $scope.name = $routeParams.name;
        $scope.singer = $routeParams.singer;
    }]);

ProfileCtrl.$inject = ['$scope', '$location', 'userService', '$routeParams', '$filter'];

function ProfileCtrl($scope, $location, userService, $routeParams, $filter) {
    // console.log('I am in profile Controller');
    if (!userService.checkLogin()) {
        $location.path('login');
    }
    if ($routeParams.userName) {
        $scope.userName = $routeParams.userName;
        userService.getUsers()
            .then(function(response) {
                    var users = response.data.users;
                    // console.log(users);
                    // console.log($scope.userName);

                    users.every(function(element, index) {
                        // console.log(element, index);
                        if (element.userName === $scope.userName) {
                            $scope.user = element;
                            return false; 
                        }
                        return true;

                    });

                },
                function(err) {
                    console.log(err);
                });
    } else {
        $scope.user = userService.getUser();
    }


}
