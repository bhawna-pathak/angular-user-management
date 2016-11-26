angular.module('myApp')
    .controller('userListCtrl', ['$scope', '$http', 'userService', function($scope, $http, userService) {
        console.log('userlist ctrl');
        $scope.currentPage = 1;
        $scope.recordsPerPage = 4;
        $scope.users = [];
        $scope.totalRecords = $scope.users.length;

        $scope.optionList = [{
                key: "firstName",
                value: "FirstName"
            }, {
                key: "lastName",
                value: "LastName"
            }, {
                key: "userName",
                value: "UserName"
            }

        ];

        userService.getUsers()
            .then(function(response) {
                    $scope.users = response.data.users;
                    console.log($scope.users);
                    $scope.totalRecords = $scope.users.length;
                    console.log($scope.totalRecords);
                    console.log($scope.getTotalPages());
                },
                function(err) {
                    console.log(err);
                });

        $scope.getTotalPages = function() {
            return Math.ceil($scope.totalRecords / $scope.recordsPerPage);
        };
        $scope.changeSearchBy = function() {
            console.log($scope.searchBy);
        };


    }]);
