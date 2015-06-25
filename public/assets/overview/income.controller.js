'use strict';

angular.module('bankRoll').controller('IncomeController', function ($routeParams, $location, Income) {
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
      console.log('is this shit working?');
    });
  };

  // vm.onModalLoad = function () {};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvb3ZlcnZpZXcvaW5jb21lLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQ0osTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUVsQixVQUFVLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtBQUN6RSxNQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDZCxJQUFFLENBQUMsRUFBRSxHQUFHLFlBQVksQ0FBQyxFQUFFLENBQUM7O0FBR3hCLFFBQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLElBQUksRUFBRTtBQUNuQyxNQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztHQUNsQixDQUFDLENBQUM7O0FBRUgsSUFBRSxDQUFDLE9BQU8sR0FBRyxVQUFVLEVBQUUsRUFBRTtBQUN6QixVQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsWUFBWTtBQUNoQyxlQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQzdCLENBQUMsQ0FBQztHQUNKLENBQUM7O0FBRUYsSUFBRSxDQUFDLFVBQVUsR0FBRyxZQUFZO0FBQzFCLGFBQVM7QUFDVCxVQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsWUFBWTtBQUMvQixhQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7S0FDdEMsQ0FBQyxDQUFDO0dBQ0osQ0FBQzs7O0NBR0gsQ0FBQyxDQUFDIiwiZmlsZSI6InNyYy9hc3NldHMvb3ZlcnZpZXcvaW5jb21lLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyXG4gIC5tb2R1bGUoJ2JhbmtSb2xsJylcblxuICAuY29udHJvbGxlcignSW5jb21lQ29udHJvbGxlcicsIGZ1bmN0aW9uICgkcm91dGVQYXJhbXMsICRsb2NhdGlvbiwgSW5jb21lKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICB2bS5pZCA9ICRyb3V0ZVBhcmFtcy5pZDtcblxuXG4gICAgSW5jb21lLmdldE9uZSh2bS5pZCwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHZtLmluY29tZSA9IGRhdGE7XG4gICAgfSk7XG5cbiAgICB2bS5kZXN0cm95ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBJbmNvbWUuZGVzdHJveSh2bS5pZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9jYXRpb24ucGF0aCgnL292ZXJ2aWV3Jyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdm0uc2F2ZUluY29tZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRlYnVnZ2VyO1xuICAgICAgSW5jb21lLmNyZWF0ZSh2bS5pZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImlzIHRoaXMgc2hpdCB3b3JraW5nP1wiKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyB2bS5vbk1vZGFsTG9hZCA9IGZ1bmN0aW9uICgpIHt9O1xuICB9KTtcbiJdfQ==
