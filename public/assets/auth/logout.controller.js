'use strict';

angular.module('bankRoll').controller('LogoutCtrl', function ($scope, $location, Auth) {
  var vm = this;

  vm.login = function () {
    Auth.login(vm.email, vm.password, function () {
      $location.path('/people');
      $scope.$apply();
    });
  };

  vm.register = function () {};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvYXV0aC9sb2dvdXQuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FDSixNQUFNLENBQUMsVUFBVSxDQUFDLENBRWhCLFVBQVUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRTtBQUM3RCxNQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7O0FBRWQsSUFBRSxDQUFDLEtBQUssR0FBRyxZQUFZO0FBQ3JCLFFBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFLFlBQVk7QUFDNUMsZUFBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMxQixZQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDakIsQ0FBQyxDQUFDO0dBQ0osQ0FBQzs7QUFFRixJQUFFLENBQUMsUUFBUSxHQUFHLFlBQVksRUFBRSxDQUFDO0NBQzlCLENBQUMsQ0FBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2F1dGgvbG9nb3V0LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyXG4gIC5tb2R1bGUoJ2JhbmtSb2xsJylcblxuICAgIC5jb250cm9sbGVyKCdMb2dvdXRDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBBdXRoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIHZtLmxvZ2luID0gZnVuY3Rpb24gKCkge1xuICAgICAgQXV0aC5sb2dpbih2bS5lbWFpbCwgdm0ucGFzc3dvcmQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvY2F0aW9uLnBhdGgoJy9wZW9wbGUnKTtcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZtLnJlZ2lzdGVyID0gZnVuY3Rpb24gKCkge307XG4gIH0pXG5cbiJdfQ==
