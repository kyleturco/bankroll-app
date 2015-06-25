angular
  .module('bankRoll')

  .controller('RegisterCtrl', function ($rootScope, $scope, $location, API_URL, $http) {
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


    vm.register = function (email, password) {
      var fb = new Firebase('https://bankroll.firebaseio.com/profiles');

      fb.createUser({
        email: vm.email, 
        password: vm.password
      }, function (err, authData) {
        if (err) {
          console.log('Error', err)
        } else {
          vm.login();
          console.log("User created successfully");
          fb.push({id: authData.uid, income: {total: 0}, expenses: {total: 0}});
        }
      })
    };
  });
