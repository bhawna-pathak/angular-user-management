angular.module('myApp')
    .controller('userListCtrl', ['$scope', '$http', 'userService', function($scope, $http, userService) {
        console.log('userlist ctrl');

        userService.getUsers()
            .then(function(response) {
                $scope.users = response.data.users;
                console.log($scope.users);
            }, function(err) {
                console.log(err);
            });

        // $scope.user = userService.getUser();
        $scope.optionList = [
            // { "1": "One" },
            // { "2": "Two" },
            // { "3": "Three" },
            // { "4": "Four" }
            // {
            //     key: "1",
            //     value: "One"
            // }, {
            //     key: "2",
            //     value: "Two"
            // }, {
            //     key: "3",
            //     value: "Three"
            // }, {
            //     key: "4",
            //     value: "Four"
            // }
            {
                key:"firstName",
                value: "FirstName"
            },
                {
                key:"lastName",
                value: "LastName"
            },
                {
                key:"userName",
                value: "UserName"
            }
          
        ];

        $scope.changeSearchBy = function() {
            console.log($scope.searchBy);
        }


    }]);
