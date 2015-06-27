angular
  .module('bankRoll')

  .controller('IncomeController', function ($scope, incomeFactory, $firebaseObject, API_URL, $rootScope, currentUser) {
    var vm = this;
    // vm.id = $routeParams.id;

    // Income.getOne(vm.id, function (data) {
    //   vm.income = data;
    // });

    // vm.destroy = function (id) {
    //   incomeFactory.destroy(vm.id, function () {
    //     $location.path('/overview');
    //   });
    // };

    vm.saveIncome = function () {
      // var incomeRef = new Firebase(`https://bankroll.firebaseio.com/profiles/${currentUser.uid}/income`);
      // incomeRef.push({'income': $scope.income});

      var profileRef = new Firebase('https://bankroll.firebaseio.com/profiles/');
      profileRef.child(currentUser.uid).child('income').child(vm.income.name).set(vm.income, function(err) {
        console.log('done setting income, err:', err)
        // value has been set, can redirect the user or what ever
        vm.income = {};
        $scope.$apply();
        console.log('did this update3?')
      });
    };

    // vm.onModalLoad = function () {};
});
