angular
  .module('bankRoll')

  .controller('IncomeController', function ($scope, $routeParams, $location, incomeFactory) {
    var vm = this;
    // vm.id = $routeParams.id;

    // Income.getOne(vm.id, function (data) {
    //   vm.income = data;
    // });

    vm.destroy = function (id) {
      incomeFactory.destroy(vm.id, function () {
        $location.path('/overview');
      });
    };

    vm.saveIncome = function () {
      console.log(vm.main);
      incomeFactory.create(vm.main.income, function (data) {
        console.log("is this shit working?");
      });
    };

    // vm.onModalLoad = function () {};
});
