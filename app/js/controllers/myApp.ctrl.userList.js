angular.module('myApp')
    .controller('userListCtrl', ['$scope', '$http', 'userService', function($scope, $http, userService) {
        console.log('userlist ctrl');

        // $scope.user = userService.getUser();

        userService.getUsers()
            .then(function(response) {
                $scope.users = response.data.users;
                console.log($scope.users);
            }, function(err) {
                console.log(err);
            });

    }]);
