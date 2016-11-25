angular.module('myApp')
    .directive('siteHeader', [function() {
        return {
            restrict: 'E',
            templateUrl: 'app/partials/directives/header.html'

        };
    }])
    .directive('siteFooter', [function() {
        return {
            restrict: 'E',
            templateUrl: 'app/partials/directives/footer.html'

        };
    }])
    .directive('appNavMain', function() {
        return {
            templateUrl: 'app/partials/directives/navigation.html',
            controller: 'appNavMainCtrl'
        }
    })
    .controller('appNavMainCtrl', ['$scope', '$location', 'SITE', 'userService', function($scope, $location, SITE, userService) {
        console.log('I am in navigation controller');
        console.log(SITE);
        $scope.siteName = SITE.NAME;
        $scope.navItems = [{
            name: 'Home',
            path: '/home',
        }, {
            name: 'About Us',
            path: '/about'
        }, {
            name: 'Contact Us',
            path: '/contact'
        }];

        // Instead of $location use $route
        $scope.isActive = function(path) {
            return ($location.path() === path)
        }
    }])
    .directive('userWelcome', function() {
        return {
            templateUrl: 'app/partials/directives/userWelcome.html',
            controller: 'userWelcomeCtrl'
        }
    })
    .controller('userWelcomeCtrl', ['$scope', 'userService', function($scope, userService) {
        $scope.user = userService.getUser();
        console.log($scope.user);
    }])
    .directive('userMenu', function() {
        return {
            templateUrl: 'app/partials/directives/userMenu.html',
            controller: 'userMenuCtrl'
        }
    })
    .controller('userMenuCtrl', ['$scope', 'userService', function($scope, userService) {
        console.log('I am in userMenuCtrl');
    }])
    .directive('editUser', function() {
        return {
            templateUrl: 'app/partials/routes/editUser.html',
            controller: 'editUserCtrl'
        }
    })
    .controller('editUserCtrl', ['$scope', 'userService', function($scope, userService) {
        console.log('I am in editUser');
    }]);
