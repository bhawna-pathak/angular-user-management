angular.module('myApp')
    .controller('registerCtrl', function($scope, $location, userService) {

        $scope.user = userService.getUser();

        $scope.doRegister = function() {
            console.log('Inside register');
            var userErrors = userService.getUserErrors();
            $scope.userErrors = JSON.parse(JSON.stringify(userErrors));


            if ($scope.register.$valid && $scope.user.password === $scope.confirmPass) {
                userService.login();
                userService.setUser($scope.user);
                $location.path('profile');
            }
        }

    });
