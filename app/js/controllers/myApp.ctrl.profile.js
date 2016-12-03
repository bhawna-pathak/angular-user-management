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
        console.log($routeParams.userName);
        $scope.user = userService.setUser();

    } else {
        $scope.user = userService.getUser();
    }


}
