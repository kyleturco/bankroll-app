angular
  .module('bankRoll')

  .controller('LoginCtrl', function ($rootScope, $scope, $location, API_URL, $http) {
    var vm = this;

    vm.login = function (email, password) {
      var fb = new Firebase(API_URL);

      fb.authWithPassword({
        email: email,
        password: password
      }, function (err, authData) {
        if (err) {
          console.log('Error', err)
        } else {
          $rootScope.auth = authData;
          $location.path('/overview');
          $scope.$apply();
        }
      });
    };

    vm.register = function (email, password) {
      var fb = new Firebase(API_URL);

      fb.createUser({
        email: email, 
        password: password
      }, function (err, authData) {
        if (err) {
          console.log('Error', err)
        } else {
          vm.login();
          console.log("User created successfully");
        }
      })
      $http
        .put(`${API_URL}/profile/${userID}.json`, personObject)
        .success(cb)
    };
  });

