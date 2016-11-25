angular.module('myApp')
.service('loginDataService', function() {
    var name;
    var password;
    return {
        getName: function() {
            return name;
        },
        setName: function(newName) {
            name = newName;
        },
        getPassword: function() {
        	return password;
        },
        setPassword: function(newPassword){
        	password = newPassword;
        }

    }
});