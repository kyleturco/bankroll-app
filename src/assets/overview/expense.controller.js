angular
  .module('bankRoll')

  .controller('ExpenseController', function ($scope, expenseFactory, $firebaseObject, API_URL, $rootScope, currentUser) {
    var vm = this;
    var fb = new Firebase(API_URL);
    // var authData = fb.getAuth();

    var profileRef = new Firebase('https://bankroll.firebaseio.com/profiles');
    var currentUserExpense = profileRef.child($rootScope.auth.uid).child('expense');
    $scope.expenseList = $firebaseObject(currentUserExpense);

    // expenseFactory.allExpense(function(expense){
    //   vm.expense = expense;
    // });

    vm.saveExpense = function () {
      debugger;
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
});
