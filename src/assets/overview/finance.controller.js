angular
  .module('bankRoll')

  .controller('FinanceController', function ($scope, financeFactory, $firebaseArray, API_URL, $rootScope, currentUser) {
    var vm = this;
    var fb = new Firebase(API_URL);
    // var authData = fb.getAuth();

    var profileRef = new Firebase('https://bankroll.firebaseio.com/profiles');

    var currentUserIncome = profileRef.child($rootScope.auth.uid).child('income');
    $scope.incomeList = $firebaseArray(currentUserIncome);

    vm.loadIncome = function () {
      $scope.totalIncome = 0;
      $scope.incomeList.$loaded().then(function(res) {
      for(var i = 0; i < $scope.incomeList.length; i++) {
        $scope.totalIncome = $scope.totalIncome + parseFloat($scope.incomeList[i].amount);
      }
      console.log('total income list', $scope.incomeList);
      });
    }

    vm.loadIncome();

    var currentUserExpense = profileRef.child($rootScope.auth.uid).child('expense');
    $scope.expenseList = $firebaseArray(currentUserExpense);

    vm.loadExpense = function () {
      $scope.totalExpense = 0;
      $scope.expenseList.$loaded().then(function(res) {
        for(var i = 0; i < $scope.expenseList.length; i++) {
          $scope.totalExpense = $scope.totalExpense + parseFloat($scope.expenseList[i].amount);
        }
        console.log('total expense list', $scope.expenseList);
      });
    }

    vm.loadExpense();

    vm.saveIncome = function () {
      var randNum = (Math.floor(Math.random() * 1000000000000000));
      var profileRef = new Firebase('https://bankroll.firebaseio.com/profiles/');
      vm.income.time = Date();
      vm.income.date = vm.income.date.toString();
      vm.income.date = vm.income.date.slice(0, 15);
      profileRef.child($rootScope.auth.uid + '/income' + '/income' + (randNum)).set(vm.income, function(err) {
        console.log('done setting income, err:', err);
        vm.income = {};
        vm.loadIncome();
        $scope.$apply();
      });
    };

    vm.saveExpense = function () {
      var randNum = (Math.floor(Math.random() * 1000000000000000));
      var profileRef = new Firebase('https://bankroll.firebaseio.com/profiles/');
      vm.expense.time = Date();
      vm.expense.date = vm.expense.date.toString();
      vm.expense.date = vm.expense.date.slice(0, 15);
      profileRef.child($rootScope.auth.uid + '/expense' + '/expense' + (randNum)).set(vm.expense, function(err) {
        console.log('done setting expense, err:', err);
        vm.expense = {};
        vm.loadExpense();
        $scope.$apply();
      });
    };

    vm.deleteIncome = function (item) {
      var profileRef = new Firebase('https://bankroll.firebaseio.com/profiles/' + $rootScope.auth.uid + '/income');
      profileRef.child(item.$id).remove(function(error){
        if (error) {
          console.log("Error;", error);
        } else {
          console.log("Removed successfully");
          vm.loadIncome();
        }
      });
    };

    vm.deleteExpense = function (item) {
      var profileRef = new Firebase('https://bankroll.firebaseio.com/profiles/' + $rootScope.auth.uid + '/expense');
      profileRef.child(item.$id).remove(function(error){
        if (error) {
          console.log("Error;", error);
        } else {
          console.log("Removed successfully");
          vm.loadExpense();
        }
      });

    }


});
