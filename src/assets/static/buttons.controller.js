angular
  .module('bankRoll')

  .controller('ButtonController', function ($scope, $location) {
    $scope.goNext = function (hash) {
    $location.path(hash);
    }
});
