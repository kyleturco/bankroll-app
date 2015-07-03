'use strict';

angular.module('bankRoll').controller('IncomeController', function ($scope, incomeFactory, $firebaseObject, API_URL, $rootScope, currentUser) {
  var vm = this;

  var fb = new Firebase(API_URL);
  var authData = fb.getAuth();

  // Income.getAll(function(income){
  //   vm.income = income;
  // });
  // vm.id = $routeParams.id;

  // Income.getOne(vm.id, function (data) {
  //   vm.income = data;
  // });

  // vm.destroy = function (id) {
  //   incomeFactory.destroy(vm.id, function () {
  //     $location.path('/overview');
  //   });
  // };

  vm.saveIncome = function () {
    // var incomeRef = new Firebase(`https://bankroll.firebaseio.com/profiles/${currentUser.uid}/income`);
    // incomeRef.push({'income': $scope.income});
    var randNum = Math.floor(Math.random() * 1000000000000000);
    var profileRef = new Firebase('https://bankroll.firebaseio.com/profiles/');
    $scope.incomeList = $firebaseObject(profileRef);
    profileRef.child(currentUser.uid).child('income').child('income' + randNum).set(vm.income, function (err) {
      console.log('done setting income, err:', err);

      // value has been set, can redirect the user or what ever
      vm.income = {};
      $scope.$apply();
    });
  };

  // vm.onModalLoad = function () {};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvb3ZlcnZpZXcvaW5jb21lLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQ0osTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUVsQixVQUFVLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxNQUFNLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRTtBQUNsSCxNQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7O0FBRWQsTUFBSSxFQUFFLEdBQUcsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsTUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWtCNUIsSUFBRSxDQUFDLFVBQVUsR0FBRyxZQUFZOzs7QUFHMUIsUUFBSSxPQUFPLEdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsZ0JBQWdCLENBQUMsQUFBQyxDQUFDO0FBQzdELFFBQUksVUFBVSxHQUFHLElBQUksUUFBUSxDQUFDLDJDQUEyQyxDQUFDLENBQUM7QUFDM0UsVUFBTSxDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDaEQsY0FBVSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUksT0FBTyxBQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFTLEdBQUcsRUFBRTtBQUN6RyxhQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLEdBQUcsQ0FBQyxDQUFBOzs7QUFHN0MsUUFBRSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDZixZQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDakIsQ0FBQyxDQUFDO0dBQ0osQ0FBQzs7O0NBR0wsQ0FBQyxDQUFDIiwiZmlsZSI6InNyYy9hc3NldHMvb3ZlcnZpZXcvaW5jb21lLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyXG4gIC5tb2R1bGUoJ2JhbmtSb2xsJylcblxuICAuY29udHJvbGxlcignSW5jb21lQ29udHJvbGxlcicsIGZ1bmN0aW9uICgkc2NvcGUsIGluY29tZUZhY3RvcnksICRmaXJlYmFzZU9iamVjdCwgQVBJX1VSTCwgJHJvb3RTY29wZSwgY3VycmVudFVzZXIpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgdmFyIGZiID0gbmV3IEZpcmViYXNlKEFQSV9VUkwpO1xuICAgIHZhciBhdXRoRGF0YSA9IGZiLmdldEF1dGgoKTtcblxuXG4gICAgLy8gSW5jb21lLmdldEFsbChmdW5jdGlvbihpbmNvbWUpe1xuICAgIC8vICAgdm0uaW5jb21lID0gaW5jb21lO1xuICAgIC8vIH0pO1xuICAgIC8vIHZtLmlkID0gJHJvdXRlUGFyYW1zLmlkO1xuXG4gICAgLy8gSW5jb21lLmdldE9uZSh2bS5pZCwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAvLyAgIHZtLmluY29tZSA9IGRhdGE7XG4gICAgLy8gfSk7XG5cbiAgICAvLyB2bS5kZXN0cm95ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgLy8gICBpbmNvbWVGYWN0b3J5LmRlc3Ryb3kodm0uaWQsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgJGxvY2F0aW9uLnBhdGgoJy9vdmVydmlldycpO1xuICAgIC8vICAgfSk7XG4gICAgLy8gfTtcblxuICAgIHZtLnNhdmVJbmNvbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyB2YXIgaW5jb21lUmVmID0gbmV3IEZpcmViYXNlKGBodHRwczovL2Jhbmtyb2xsLmZpcmViYXNlaW8uY29tL3Byb2ZpbGVzLyR7Y3VycmVudFVzZXIudWlkfS9pbmNvbWVgKTtcbiAgICAgIC8vIGluY29tZVJlZi5wdXNoKHsnaW5jb21lJzogJHNjb3BlLmluY29tZX0pO1xuICAgICAgdmFyIHJhbmROdW0gPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMDAwMDAwMCkpO1xuICAgICAgdmFyIHByb2ZpbGVSZWYgPSBuZXcgRmlyZWJhc2UoJ2h0dHBzOi8vYmFua3JvbGwuZmlyZWJhc2Vpby5jb20vcHJvZmlsZXMvJyk7XG4gICAgICAkc2NvcGUuaW5jb21lTGlzdCA9ICRmaXJlYmFzZU9iamVjdChwcm9maWxlUmVmKTtcbiAgICAgIHByb2ZpbGVSZWYuY2hpbGQoY3VycmVudFVzZXIudWlkKS5jaGlsZCgnaW5jb21lJykuY2hpbGQoJ2luY29tZScgKyAocmFuZE51bSkpLnNldCh2bS5pbmNvbWUsIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnZG9uZSBzZXR0aW5nIGluY29tZSwgZXJyOicsIGVycilcblxuICAgICAgICAvLyB2YWx1ZSBoYXMgYmVlbiBzZXQsIGNhbiByZWRpcmVjdCB0aGUgdXNlciBvciB3aGF0IGV2ZXJcbiAgICAgICAgdm0uaW5jb21lID0ge307XG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyB2bS5vbk1vZGFsTG9hZCA9IGZ1bmN0aW9uICgpIHt9O1xufSk7XG4iXX0=
