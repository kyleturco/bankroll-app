angular
  .module('bankRoll')

  .controller('FinanceController', function ($scope, financeFactory, $firebaseArray, API_URL, $rootScope, currentUser) {
    var vm = this;
    var fb = new Firebase(API_URL);
    // var authData = fb.getAuth();

    var profileRef = new Firebase('https://bankroll.firebaseio.com/profiles');
    var currentUserIncome = profileRef.child($rootScope.auth.uid).child('income');
    $scope.incomeList = $firebaseArray(currentUserIncome);
    console.log('income list', $scope.incomeList);
    $scope.totalIncome = 0;

    $scope.incomeList.$loaded().then(function(res) {
      for(var i = 0; i < $scope.incomeList.length; i++) {
        $scope.totalIncome = $scope.totalIncome + parseFloat($scope.incomeList[i].amount);
      }
      console.log('total income list', $scope.incomeList);
    });


    var currentUserExpense = profileRef.child($rootScope.auth.uid).child('expense');
    $scope.expenseList = $firebaseArray(currentUserExpense);

    vm.saveIncome = function () {
      var randNum = (Math.floor(Math.random() * 1000000000000000));
      var profileRef = new Firebase('https://bankroll.firebaseio.com/profiles/');
      vm.income.time = Date();
      vm.income.date = vm.income.date.toString();
      vm.income.date = vm.income.date.slice(0, 15);
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
      vm.expense.date = vm.expense.date.toString();
      profileRef.child($rootScope.auth.uid + '/expense' + '/expense' + (randNum)).set(vm.expense, function(err) {
        console.log('done setting expense, err:', err);
      // $scope.incomeList = $firebaseObject(profileRef);
        // value has been set, can redirect the user or what ever
        vm.expense = {};
        $scope.$apply();
      });
    };

    vm.deleteIncome = function (item) {
      console.log(item);
      // delete $scope.incomeList[currentUserIncome];
      var profileRef = new Firebase('https://bankroll.firebaseio.com/profiles/' + $rootScope.auth.uid + '/income');
      profileRef.child(item.$id).remove(function(error){
        if (error) {
          console.log("Error;", error);
        } else {
          console.log("Removed successfully");
        }
      });
    };

    // $scope.getIncomeTotal = function() {
    //   var total = 0;
    //   for(var i = 0; i < $scope.incomeList.length; i++){
    //     var
    //   }
    // }

  // .filter('sumOfIncome', function() {
  //   return function (data, key) {
  //     if (typeof (data) === 'undefined' && typeof (key) === 'undefined') {
  //       return 0;
  //     }
  //     var sum = 0;
  //     for (var i = 0; i < data.length; i++) {
  //       sum = sum + data[i][key];
  //     }
  //     return sum;
  //   }
  // })
});
