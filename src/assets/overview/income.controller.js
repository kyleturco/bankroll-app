angular
  .module('bankRoll')

  .controller('IncomeController', function ($scope, incomeFactory, $firebaseObject, API_URL, $rootScope, currentUser) {
    var vm = this;
    var fb = new Firebase(API_URL);
    // var authData = fb.getAuth();


    var profileRef = new Firebase('https://bankroll.firebaseio.com/profiles');
    var currentUserIncome = profileRef.child($rootScope.auth.uid).child('income');
    $scope.incomeList = $firebaseObject(currentUserIncome);
    console.log(currentUserIncome);

    incomeFactory.allIncome(function(income){
      vm.income = income;
    });

    // vm.id = currentUser.uid;

    // incomeFactory.getOne(vm.id, function (income) {
    //   vm.income = income;
    // });

    // vm.destroy = function (id) {
    //   incomeFactory.destroy(vm.id, function () {
    //     $location.path('/overview');
    //   });
    // };

    vm.saveIncome = function () {
      var randNum = (Math.floor(Math.random() * 1000000000000000));
      var profileRef = new Firebase('https://bankroll.firebaseio.com/profiles/');
      vm.income.time = Date();
      profileRef.child($rootScope.auth.uid).child('income').child('income' + (randNum)).set(vm.income, function(err) {
        console.log('done setting income, err:', err);
      // $scope.incomeList = $firebaseObject(profileRef);
        // value has been set, can redirect the user or what ever
        vm.income = {};
        $scope.$apply();
      });
    };
    // vm.onModalLoad = function () {};
});
