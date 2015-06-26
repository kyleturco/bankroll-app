angular
  .module('bankRoll')

  .controller('RegisterCtrl', function ($scope, $location, API_URL, $http, currentUser) {
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
          currentUser.set(authData);
          $location.path('/overview');
          $scope.$apply();
        }
      });
    };

    vm.register = function (email, password) {
      var ref = new Firebase('https://bankroll.firebaseio.com/profiles/');

      ref.createUser({
        email: vm.email, 
        password: vm.password
      }, function (err, authData) {
        if (err) {
          console.log('Error', err)
        } else {
          vm.login();
          console.log("User created successfully");

          currentUser.set(authData);
          // currentUser === {}
          var profile = {};
          ref.child(authData.uid).set(profile)
        }
      })
    };
  });
