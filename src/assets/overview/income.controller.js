angular
  .module('bankRoll')

  .controller('IncomeController', function ($scope, incomeFactory, $firebaseObject, API_URL, $rootScope, currentUser) {
    var vm = this;

    Income.getAll(function(income){
      vm.income = income;
    });
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
      var randNum = (Math.floor(Math.random() * 1000000000000000));
      var profileRef = new Firebase('https://bankroll.firebaseio.com/profiles/');
      $scope.incomeList = $firebaseObject(profileRef);
      profileRef.child(currentUser.uid).child('income').child('income' + (randNum)).set(vm.income, function(err) {
        console.log('done setting income, err:', err)

        // value has been set, can redirect the user or what ever
        vm.income = {};
        $scope.$apply();
      });
    };

    // vm.onModalLoad = function () {};
});
