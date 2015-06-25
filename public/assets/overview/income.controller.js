'use strict';

angular.module('bankRoll').controller('IncomeController', function ($scope, $routeParams, $location, incomeFactory) {
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
      console.log('is this shit working?');
    });
  };

  // vm.onModalLoad = function () {};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvb3ZlcnZpZXcvaW5jb21lLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQ0osTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUVsQixVQUFVLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUU7QUFDeEYsTUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDOzs7Ozs7O0FBT2QsSUFBRSxDQUFDLE9BQU8sR0FBRyxVQUFVLEVBQUUsRUFBRTtBQUN6QixpQkFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLFlBQVk7QUFDdkMsZUFBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUM3QixDQUFDLENBQUM7R0FDSixDQUFDOztBQUVGLElBQUUsQ0FBQyxVQUFVLEdBQUcsWUFBWTtBQUMxQixXQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNyQixpQkFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLElBQUksRUFBRTtBQUNuRCxhQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7S0FDdEMsQ0FBQyxDQUFDO0dBQ0osQ0FBQzs7O0NBR0wsQ0FBQyxDQUFDIiwiZmlsZSI6InNyYy9hc3NldHMvb3ZlcnZpZXcvaW5jb21lLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyXG4gIC5tb2R1bGUoJ2JhbmtSb2xsJylcblxuICAuY29udHJvbGxlcignSW5jb21lQ29udHJvbGxlcicsIGZ1bmN0aW9uICgkc2NvcGUsICRyb3V0ZVBhcmFtcywgJGxvY2F0aW9uLCBpbmNvbWVGYWN0b3J5KSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICAvLyB2bS5pZCA9ICRyb3V0ZVBhcmFtcy5pZDtcblxuICAgIC8vIEluY29tZS5nZXRPbmUodm0uaWQsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgLy8gICB2bS5pbmNvbWUgPSBkYXRhO1xuICAgIC8vIH0pO1xuXG4gICAgdm0uZGVzdHJveSA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgaW5jb21lRmFjdG9yeS5kZXN0cm95KHZtLmlkLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2NhdGlvbi5wYXRoKCcvb3ZlcnZpZXcnKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2bS5zYXZlSW5jb21lID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2codm0ubWFpbik7XG4gICAgICBpbmNvbWVGYWN0b3J5LmNyZWF0ZSh2bS5tYWluLmluY29tZSwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpcyB0aGlzIHNoaXQgd29ya2luZz9cIik7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gdm0ub25Nb2RhbExvYWQgPSBmdW5jdGlvbiAoKSB7fTtcbn0pO1xuIl19
