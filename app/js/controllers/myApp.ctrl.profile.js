angular.module('myApp')
    .controller('profileCtrl', ProfileCtrl);

ProfileCtrl.$inject = ['$scope', '$location', 'userService'];

function ProfileCtrl($scope, $location, userService) {
    console.log('I am in profile Controller');
    if (!userService.checkLogin()) {
        $location.path('login');
    } 

    $scope.user = userService.getUser();
}
