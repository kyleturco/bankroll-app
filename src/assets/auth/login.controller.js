angular
  .module('bankRoll')

  .controller('LoginCtrl', function ($rootScope, $scope, $location, API_URL) {
    var vm = this;

    vm.login = function () {
      var fb = new Firebase(API_URL);

      fb.authWithPassword({
        email: vm.email,
        password: vm.password
      }, function (err, authData) {
        if (err) {
          console.log('Error', err)
        } else {
          $rootScope.auth = authData;
          $location.path('/people');
          $scope.$apply();
        }
      });

    };

    vm.register = function () {
      var fb = new Firebase(API_URL);

      alert("is this working?");
      fb.createUser({
        email: vm.email,
        password: vm.password
      }, function (err, authData) {
        if (err) {
          console.log('Error', err)
        } else {
          vm.login();
          console.log("User created successfully");
        }
      })
    };
  });
