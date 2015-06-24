angular
  .module('bankRoll')

  .controller('IncomeController', function ($routeParams, $location, Income) {
    var vm = this;
    vm.id = $routeParams.id;

    Person.getOne(vm.id, function (data) {
      vm.income = data;
    });

    vm.destroy = function (id) {
      Income.destroy(vm.id, function () {
        $location.path('/overview');
      });
    };
    // vm.onModalLoad = function () {};
  });
