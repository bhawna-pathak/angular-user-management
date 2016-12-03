var app = angular.module('myApp', ['ngRoute']);


app.controller('appCtrl', ['$scope', '$location', '$route', 'SITE', function($scope, $location, $route, SITE) {
    console.log('I am appCtrl');
    $scope.dispInput = function() {
        // console.log('You Clicked');
    };
    // $scope.loggedIn = userService.checkLogin();
    // if ($scope.loggedIn) {
    //  $scope.user = userService.getUser();
    // }
    $scope.$on('$locationChangeSuccess', function(angularEvent, newUrl, oldUrl, newState, oldState) {
        // console.log($route.current);
        if ($route.current.$$route.routeVars) {
            $scope.pageTitle = $route.current.$$route.routeVars.pageTitle;
        }
    });

}]);
