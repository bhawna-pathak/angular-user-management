angular.module('myApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/partials/routes/welcome.html',
                routeVars: {
                    pageTitle: 'Welcome'
                }
            })
            .when('/home', {
                templateUrl: 'app/partials/routes/home.html',
                routeVars: {
                    pageTitle: 'Home'
                }
            })
            .when('/login', {
                templateUrl: 'app/partials/routes/login.html',
                routeVars: {
                    pageTitle: 'Login'
                }
            })
            .when('/profile', {
                templateUrl: 'app/partials/routes/profile.html',
                routeVars: {
                    pageTitle: 'Profile'
                }
            })
            .when('/profile/:userName', {
                templateUrl: 'app/partials/routes/userDetail.html',
                routeVars: {
                    pageTitle: 'Profile'
                }
            })
            .when('/register', {
                templateUrl: 'app/partials/routes/register.html',
                routeVars: {
                    pageTitle: 'Register'
                }
            })
            .when('/userList', {
                templateUrl: 'app/partials/routes/userList.html',
                routeVars: {
                    pageTitle: 'userList'
                }
            })
            .when('/logout', {
                templateUrl: 'app/partials/routes/logout.html',
                routeVars: {
                    pageTitle: 'LogOut'
                }
            })
            .when('/about', {
                templateUrl: 'app/partials/routes/about.html',
                routeVars: {
                    pageTitle: 'About'
                }
            })
            .when('/contact', {
                templateUrl: 'app/partials/routes/contact.html',
                routeVars: {
                    pageTitle: 'Contact'
                }
            })
            .otherwise({ redirectTo: '/' });
    });
