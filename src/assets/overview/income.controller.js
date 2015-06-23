angular
  .module('bankRoll')

  .controller('IncomeCtrl', function (Profile, $rootScope, $scope, $location, API_URL, $http) {
    var vm = this;

    vm.addIncome = function (name, amount, date, notes) {
      var fb = new Firebase(API_URL);

      var usersRef = ref.child("users");
        usersRef.set({
        email: vm.secret.email,
        password: vm.secret.password
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
