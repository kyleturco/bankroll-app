angular
  .module('bankRoll')

  .controller('LoginCtrl', function ($rootScope, $scope, $location, API_URL, $http) {
    var vm = this;

    vm.login = function (email, password) {
      var fb = new Firebase(API_URL);

      fb.authWithPassword({
        email: vm.email,
        password: vm.password
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
  });

