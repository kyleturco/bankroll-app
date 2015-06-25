angular
  .module('bankRoll')

  .controller('IncomeController', function ($routeParams, $location, Income) {
    var vm = this;
    vm.id = $routeParams.id;


    Income.getOne(vm.id, function (data) {
      vm.income = data;
    });

    vm.destroy = function (id) {
      Income.destroy(vm.id, function () {
        $location.path('/overview');
      });
    };

    vm.saveIncome = function () {
      debugger;
      Income.create(vm.id, function () {
        console.log("is this shit working?");
      });
    };

    // vm.onModalLoad = function () {};
  });
