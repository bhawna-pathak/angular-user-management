angular.module('myApp')
    .controller('userListCtrl', ['$scope', '$http', 'userService', function($scope, $http, userService) {
        console.log('userlist ctrl');
        $scope.currentPage = 1;
        $scope.recordsPerPage = 4;
        $scope.data = [];

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
                    $scope.totalRecords = $scope.users.length;
                    $scope.totalPages = $scope.getTotalPages();
                    $scope.data = $scope.getData();
                    $scope.paginationItems = [];
                    generatePagination($scope.totalPages);
                },
                function(err) {
                    console.log(err);
                });

        function generatePagination(totalPages) {
            var i = 0;
            while (i < totalPages) {
                $scope.paginationItems.unshift(totalPages--);
            }
        }
        $scope.goToPage = function(page) {
            console.log(page);
            $scope.currentPage = page;
            $scope.data = $scope.getData();
        };
        $scope.changeSearchBy = function() {
            console.log($scope.searchBy);
        };

        $scope.getTotalPages = function() {
            return Math.ceil($scope.totalRecords / $scope.recordsPerPage);
        };

        $scope.getStartingIndex = function() {
            return $scope.recordsPerPage * ($scope.currentPage - 1) + 1 - 1;
        };
        $scope.getData = function() {
            var startingIndex = $scope.getStartingIndex();
            $scope.data = $scope.users.slice(startingIndex, startingIndex + $scope.recordsPerPage);
            return $scope.data;
        };
        $scope.onNextClick = function() {
            if ($scope.currentPage < $scope.getTotalPages()) {
                $scope.currentPage++;
            }
            $scope.data = $scope.getData();
        };

        $scope.onPreviousClick = function() {
            if ($scope.currentPage <= $scope.getTotalPages()) {
                $scope.currentPage--;
            }
            $scope.data = $scope.getData();
        };


    }]);
