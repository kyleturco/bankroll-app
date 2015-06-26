angular
  .module('bankRoll')

  .factory('currentUser', function(){
    var user = {};

    user.set = function(userData) {
      angular.extend(user, userData)
    }

    return user;
  });
