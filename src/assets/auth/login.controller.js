angular
  .module('bankRoll')

  .controller('LoginCtrl', function (Profile, $rootScope, $scope, $location, API_URL, $http) {
    var vm = this;

    vm.login = function (email, password) {
      var fb = new Firebase(API_URL);

      fb.authWithPassword({
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

    vm.register = function (email, password) {
      var fb = new Firebase(API_URL);

      fb.createUser({
        email: vm.secret.email, 
        password: vm.secret.password
      }, function (err, authData) {
        if (err) {
          console.log('Error', err)
        } else {
          vm.login();
          console.log("User created successfully");
          Profile.create(vm.data.uid, authData.uid, function(){
            vm.login(vm.secret.email, vm.secret.password);
          })
        }
      })
    };
  });

