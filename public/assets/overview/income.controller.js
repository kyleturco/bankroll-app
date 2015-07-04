'use strict';

angular.module('bankRoll').controller('FinanceController', function ($scope, financeFactory, $firebaseObject, API_URL, $rootScope, currentUser) {
  var vm = this;
  var fb = new Firebase(API_URL);
  // var authData = fb.getAuth();

  var profileRef = new Firebase('https://bankroll.firebaseio.com/profiles');
  var currentUserIncome = profileRef.child($rootScope.auth.uid).child('income');
  $scope.incomeList = $firebaseObject(currentUserIncome);

  var profileRef = new Firebase('https://bankroll.firebaseio.com/profiles');
  var currentUserExpense = profileRef.child($rootScope.auth.uid).child('expense');
  $scope.expenseList = $firebaseObject(currentUserExpense);

  vm.saveIncome = function () {
    var randNum = Math.floor(Math.random() * 1000000000000000);
    var profileRef = new Firebase('https://bankroll.firebaseio.com/profiles/');
    vm.income.time = Date();
    vm.income.date = JSON.stringify(vm.income.date);
    profileRef.child($rootScope.auth.uid + '/income' + '/income' + randNum).set(vm.income, function (err) {
      console.log('done setting income, err:', err);
      // $scope.incomeList = $firebaseObject(profileRef);
      // value has been set, can redirect the user or what ever
      vm.income = {};
      $scope.$apply();
    });
  };

  vm.saveExpense = function () {
    var randNum = Math.floor(Math.random() * 1000000000000000);
    var profileRef = new Firebase('https://bankroll.firebaseio.com/profiles/');
    vm.expense.time = Date();
    vm.expense.date = JSON.stringify(vm.expense.date);
    profileRef.child($rootScope.auth.uid + '/expense' + '/expense' + randNum).set(vm.expense, function (err) {
      console.log('done setting expense, err:', err);
      // $scope.incomeList = $firebaseObject(profileRef);
      // value has been set, can redirect the user or what ever
      vm.expense = {};
      $scope.$apply();
    });
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvb3ZlcnZpZXcvaW5jb21lLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQ0osTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUVsQixVQUFVLENBQUMsbUJBQW1CLEVBQUUsVUFBVSxNQUFNLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRTtBQUNwSCxNQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDZCxNQUFJLEVBQUUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7O0FBSS9CLE1BQUksVUFBVSxHQUFHLElBQUksUUFBUSxDQUFDLDBDQUEwQyxDQUFDLENBQUM7QUFDMUUsTUFBSSxpQkFBaUIsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzlFLFFBQU0sQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUM7O0FBRXZELE1BQUksVUFBVSxHQUFHLElBQUksUUFBUSxDQUFDLDBDQUEwQyxDQUFDLENBQUM7QUFDMUUsTUFBSSxrQkFBa0IsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2hGLFFBQU0sQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDLGtCQUFrQixDQUFDLENBQUM7O0FBRXpELElBQUUsQ0FBQyxVQUFVLEdBQUcsWUFBWTtBQUMxQixRQUFJLE9BQU8sR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQyxBQUFDLENBQUM7QUFDN0QsUUFBSSxVQUFVLEdBQUcsSUFBSSxRQUFRLENBQUMsMkNBQTJDLENBQUMsQ0FBQztBQUMzRSxNQUFFLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQztBQUN4QixNQUFFLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEQsY0FBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUcsU0FBUyxHQUFJLE9BQU8sQUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBUyxHQUFHLEVBQUU7QUFDckcsYUFBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxHQUFHLENBQUMsQ0FBQzs7O0FBRzlDLFFBQUUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2YsWUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ2pCLENBQUMsQ0FBQztHQUNKLENBQUM7O0FBRUYsSUFBRSxDQUFDLFdBQVcsR0FBRyxZQUFZO0FBQzNCLFFBQUksT0FBTyxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLGdCQUFnQixDQUFDLEFBQUMsQ0FBQztBQUM3RCxRQUFJLFVBQVUsR0FBRyxJQUFJLFFBQVEsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0FBQzNFLE1BQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDO0FBQ3pCLE1BQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsRCxjQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsR0FBRyxVQUFVLEdBQUksT0FBTyxBQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFTLEdBQUcsRUFBRTtBQUN4RyxhQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixFQUFFLEdBQUcsQ0FBQyxDQUFDOzs7QUFHL0MsUUFBRSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDaEIsWUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ2pCLENBQUMsQ0FBQztHQUNKLENBQUM7Q0FDTCxDQUFDLENBQUMiLCJmaWxlIjoic3JjL2Fzc2V0cy9vdmVydmlldy9pbmNvbWUuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXJcbiAgLm1vZHVsZSgnYmFua1JvbGwnKVxuXG4gIC5jb250cm9sbGVyKCdGaW5hbmNlQ29udHJvbGxlcicsIGZ1bmN0aW9uICgkc2NvcGUsIGZpbmFuY2VGYWN0b3J5LCAkZmlyZWJhc2VPYmplY3QsIEFQSV9VUkwsICRyb290U2NvcGUsIGN1cnJlbnRVc2VyKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICB2YXIgZmIgPSBuZXcgRmlyZWJhc2UoQVBJX1VSTCk7XG4gICAgLy8gdmFyIGF1dGhEYXRhID0gZmIuZ2V0QXV0aCgpO1xuXG5cbiAgICB2YXIgcHJvZmlsZVJlZiA9IG5ldyBGaXJlYmFzZSgnaHR0cHM6Ly9iYW5rcm9sbC5maXJlYmFzZWlvLmNvbS9wcm9maWxlcycpO1xuICAgIHZhciBjdXJyZW50VXNlckluY29tZSA9IHByb2ZpbGVSZWYuY2hpbGQoJHJvb3RTY29wZS5hdXRoLnVpZCkuY2hpbGQoJ2luY29tZScpO1xuICAgICRzY29wZS5pbmNvbWVMaXN0ID0gJGZpcmViYXNlT2JqZWN0KGN1cnJlbnRVc2VySW5jb21lKTtcblxuICAgIHZhciBwcm9maWxlUmVmID0gbmV3IEZpcmViYXNlKCdodHRwczovL2Jhbmtyb2xsLmZpcmViYXNlaW8uY29tL3Byb2ZpbGVzJyk7XG4gICAgdmFyIGN1cnJlbnRVc2VyRXhwZW5zZSA9IHByb2ZpbGVSZWYuY2hpbGQoJHJvb3RTY29wZS5hdXRoLnVpZCkuY2hpbGQoJ2V4cGVuc2UnKTtcbiAgICAkc2NvcGUuZXhwZW5zZUxpc3QgPSAkZmlyZWJhc2VPYmplY3QoY3VycmVudFVzZXJFeHBlbnNlKTtcblxuICAgIHZtLnNhdmVJbmNvbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcmFuZE51bSA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwMDAwMDAwKSk7XG4gICAgICB2YXIgcHJvZmlsZVJlZiA9IG5ldyBGaXJlYmFzZSgnaHR0cHM6Ly9iYW5rcm9sbC5maXJlYmFzZWlvLmNvbS9wcm9maWxlcy8nKTtcbiAgICAgIHZtLmluY29tZS50aW1lID0gRGF0ZSgpO1xuICAgICAgdm0uaW5jb21lLmRhdGUgPSBKU09OLnN0cmluZ2lmeSh2bS5pbmNvbWUuZGF0ZSk7XG4gICAgICBwcm9maWxlUmVmLmNoaWxkKCRyb290U2NvcGUuYXV0aC51aWQgKyAnL2luY29tZScgKyAnL2luY29tZScgKyAocmFuZE51bSkpLnNldCh2bS5pbmNvbWUsIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnZG9uZSBzZXR0aW5nIGluY29tZSwgZXJyOicsIGVycik7XG4gICAgICAvLyAkc2NvcGUuaW5jb21lTGlzdCA9ICRmaXJlYmFzZU9iamVjdChwcm9maWxlUmVmKTtcbiAgICAgICAgLy8gdmFsdWUgaGFzIGJlZW4gc2V0LCBjYW4gcmVkaXJlY3QgdGhlIHVzZXIgb3Igd2hhdCBldmVyXG4gICAgICAgIHZtLmluY29tZSA9IHt9O1xuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdm0uc2F2ZUV4cGVuc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcmFuZE51bSA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwMDAwMDAwKSk7XG4gICAgICB2YXIgcHJvZmlsZVJlZiA9IG5ldyBGaXJlYmFzZSgnaHR0cHM6Ly9iYW5rcm9sbC5maXJlYmFzZWlvLmNvbS9wcm9maWxlcy8nKTtcbiAgICAgIHZtLmV4cGVuc2UudGltZSA9IERhdGUoKTtcbiAgICAgIHZtLmV4cGVuc2UuZGF0ZSA9IEpTT04uc3RyaW5naWZ5KHZtLmV4cGVuc2UuZGF0ZSk7XG4gICAgICBwcm9maWxlUmVmLmNoaWxkKCRyb290U2NvcGUuYXV0aC51aWQgKyAnL2V4cGVuc2UnICsgJy9leHBlbnNlJyArIChyYW5kTnVtKSkuc2V0KHZtLmV4cGVuc2UsIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnZG9uZSBzZXR0aW5nIGV4cGVuc2UsIGVycjonLCBlcnIpO1xuICAgICAgLy8gJHNjb3BlLmluY29tZUxpc3QgPSAkZmlyZWJhc2VPYmplY3QocHJvZmlsZVJlZik7XG4gICAgICAgIC8vIHZhbHVlIGhhcyBiZWVuIHNldCwgY2FuIHJlZGlyZWN0IHRoZSB1c2VyIG9yIHdoYXQgZXZlclxuICAgICAgICB2bS5leHBlbnNlID0ge307XG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcbiAgICAgIH0pO1xuICAgIH07XG59KTtcbiJdfQ==
