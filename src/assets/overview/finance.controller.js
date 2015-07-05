angular
  .module('bankRoll')

  .controller('FinanceController', function ($scope, financeFactory, $firebaseObject, API_URL, $rootScope, currentUser) {
    var vm = this;
    var fb = new Firebase(API_URL);
    // var authData = fb.getAuth();


    var profileRef = new Firebase('https://bankroll.firebaseio.com/profiles');
    var currentUserIncome = profileRef.child($rootScope.auth.uid).child('income');
    $scope.incomeList = $firebaseObject(currentUserIncome);

    var currentUserExpense = profileRef.child($rootScope.auth.uid).child('expense');
    $scope.expenseList = $firebaseObject(currentUserExpense);

    vm.saveIncome = function () {
      var randNum = (Math.floor(Math.random() * 1000000000000000));
      var profileRef = new Firebase('https://bankroll.firebaseio.com/profiles/');
      vm.income.time = Date();
      vm.income.date = JSON.stringify(vm.income.date);
      profileRef.child($rootScope.auth.uid + '/income' + '/income' + (randNum)).set(vm.income, function(err) {
        console.log('done setting income, err:', err);
        $scope.incomeID = ('income' + (randNum));
      // $scope.incomeList = $firebaseObject(profileRef);
        // value has been set, can redirect the user or what ever
        vm.income = {};
        $scope.$apply();
      });
    };

    vm.saveExpense = function () {
      var randNum = (Math.floor(Math.random() * 1000000000000000));
      var profileRef = new Firebase('https://bankroll.firebaseio.com/profiles/');
      vm.expense.time = Date();
      vm.expense.date = JSON.stringify(vm.expense.date);
      profileRef.child($rootScope.auth.uid + '/expense' + '/expense' + (randNum)).set(vm.expense, function(err) {
        console.log('done setting expense, err:', err);
      // $scope.incomeList = $firebaseObject(profileRef);
        // value has been set, can redirect the user or what ever
        vm.expense = {};
        $scope.$apply();
      });
    };

    vm.deleteIncome = function (profileRef, currentUserIncome) {
      // delete $scope.incomeList[currentUserIncome];
      var profileRef = new Firebase('https://bankroll.firebaseio.com/profiles/');
      var currentUserIncome = profileRef.child($rootScope.auth.uid).child('income');
      currentUserIncome.remove();
    }
});
