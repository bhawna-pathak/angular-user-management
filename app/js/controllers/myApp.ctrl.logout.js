angular.module('myApp')
    .controller('logOutCtrl', ['$scope', '$timeout', '$location', 'userService', function($scope, $timeout, $location, userService) {
        console.log($location.path());
        $timeout(function() {
            $location.path('home');
        }, 3000);
    }])
