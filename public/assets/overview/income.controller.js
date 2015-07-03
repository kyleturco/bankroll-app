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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvb3ZlcnZpZXcvaW5jb21lLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQ0osTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUVsQixVQUFVLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxNQUFNLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRTtBQUNsSCxNQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7O0FBRWQsTUFBSSxFQUFFLEdBQUcsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsTUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWtCNUIsSUFBRSxDQUFDLFVBQVUsR0FBRyxZQUFZO0FBQzFCLFFBQUksT0FBTyxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLGdCQUFnQixDQUFDLEFBQUMsQ0FBQztBQUM3RCxRQUFJLFVBQVUsR0FBRyxJQUFJLFFBQVEsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0FBQzNFLFVBQU0sQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2hELGNBQVUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFJLE9BQU8sQUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBUyxHQUFHLEVBQUU7QUFDekcsYUFBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxHQUFHLENBQUMsQ0FBQTs7O0FBRzdDLFFBQUUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2YsWUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ2pCLENBQUMsQ0FBQztHQUNKLENBQUM7OztDQUdMLENBQUMsQ0FBQyIsImZpbGUiOiJzcmMvYXNzZXRzL292ZXJ2aWV3L2luY29tZS5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhclxuICAubW9kdWxlKCdiYW5rUm9sbCcpXG5cbiAgLmNvbnRyb2xsZXIoJ0luY29tZUNvbnRyb2xsZXInLCBmdW5jdGlvbiAoJHNjb3BlLCBpbmNvbWVGYWN0b3J5LCAkZmlyZWJhc2VPYmplY3QsIEFQSV9VUkwsICRyb290U2NvcGUsIGN1cnJlbnRVc2VyKSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIHZhciBmYiA9IG5ldyBGaXJlYmFzZShBUElfVVJMKTtcbiAgICB2YXIgYXV0aERhdGEgPSBmYi5nZXRBdXRoKCk7XG5cblxuICAgIC8vIEluY29tZS5nZXRBbGwoZnVuY3Rpb24oaW5jb21lKXtcbiAgICAvLyAgIHZtLmluY29tZSA9IGluY29tZTtcbiAgICAvLyB9KTtcbiAgICAvLyB2bS5pZCA9ICRyb3V0ZVBhcmFtcy5pZDtcblxuICAgIC8vIEluY29tZS5nZXRPbmUodm0uaWQsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgLy8gICB2bS5pbmNvbWUgPSBkYXRhO1xuICAgIC8vIH0pO1xuXG4gICAgLy8gdm0uZGVzdHJveSA9IGZ1bmN0aW9uIChpZCkge1xuICAgIC8vICAgaW5jb21lRmFjdG9yeS5kZXN0cm95KHZtLmlkLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgICRsb2NhdGlvbi5wYXRoKCcvb3ZlcnZpZXcnKTtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH07XG5cbiAgICB2bS5zYXZlSW5jb21lID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJhbmROdW0gPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMDAwMDAwMCkpO1xuICAgICAgdmFyIHByb2ZpbGVSZWYgPSBuZXcgRmlyZWJhc2UoJ2h0dHBzOi8vYmFua3JvbGwuZmlyZWJhc2Vpby5jb20vcHJvZmlsZXMvJyk7XG4gICAgICAkc2NvcGUuaW5jb21lTGlzdCA9ICRmaXJlYmFzZU9iamVjdChwcm9maWxlUmVmKTtcbiAgICAgIHByb2ZpbGVSZWYuY2hpbGQoY3VycmVudFVzZXIudWlkKS5jaGlsZCgnaW5jb21lJykuY2hpbGQoJ2luY29tZScgKyAocmFuZE51bSkpLnNldCh2bS5pbmNvbWUsIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnZG9uZSBzZXR0aW5nIGluY29tZSwgZXJyOicsIGVycilcblxuICAgICAgICAvLyB2YWx1ZSBoYXMgYmVlbiBzZXQsIGNhbiByZWRpcmVjdCB0aGUgdXNlciBvciB3aGF0IGV2ZXJcbiAgICAgICAgdm0uaW5jb21lID0ge307XG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyB2bS5vbk1vZGFsTG9hZCA9IGZ1bmN0aW9uICgpIHt9O1xufSk7XG4iXX0=
