angular.module('myApp')
    .controller('loginCtrl', function($scope, $location, loginDataService, userService) {
        console.log('I am loginCtrl');
        if (userService.checkLogin()) {
            console.log('is logged in');
            $location.path('profile');
        }

        var users = [];

        console.log(users);
        $scope.doLogin = function() {
            // loginDataService.setName($scope.userName);
            // loginDataService.setPassword($scope.password);
            // $location.path('/profile');
            if ($scope.username && $scope.password) {
                console.log('validated');
                userService.getUsers()
                    .then(function(response) {
                        $scope.users = response.data.users;
                        // @todo use angular.forEach()
                        $scope.users.forEach(function(item, index) {
                            if ((item.userName === $scope.username) && (item.password === $scope.password)) {
                                console.log(item);
                                userService.login(item);
                                $location.path('profile');
                            }
                        });
                    }, function(err) {
                        console.log(err);
                    });
            }
        };

        $scope.userNameBlur = function() {
            console.log($scope.userName);
        };

        $scope.getinput = function() {
            console.log('inside getinput');
        };

    });
