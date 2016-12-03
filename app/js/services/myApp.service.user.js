angular.module('myApp')
    .service('userService', ['$http', '$timeout', function($http, $timeout) {
        var user = {

        };
        var userErrors = {
            'firstName': {
                'required': 'FirstName is required'
            },
            'lastName': {
                'required': 'Lastname is required'
            },
            'userName': {
                'required': 'Username is required'
            },
            'password': {
                'required': 'Enter Password'
            }
        };

        // Set session storage.
        var isLoggedIn = false;
        return {
            getUsers: function() {
                var promise = $http.get('users.json')
                    .then(function(response) {
                        return response;
                    }, function(err) {
                        return err;
                    });
                return $timeout(function() {
                    // alert('Got Users');
                    return promise;
                }, 1000);
            },
            setUser: function(newUser) {
                user = newUser;
            },
            getUser: function() {
                return user;
            },
            getUserErrors: function() {
                return userErrors;
            },
            login: function(user) {
                // check in database with these username and password.
                isLoggedIn = true;
                console.log(this, user);
                this.setUser(user);
                // console.log(this.getUser());
            },
            logout: function() {
                isLoggedIn = false;
                this.setUser({});
            },
            checkLogin: function() {
                return isLoggedIn;
            }
        }
    }]);
