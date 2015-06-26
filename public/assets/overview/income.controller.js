'use strict';

angular.module('bankRoll').controller('IncomeController', function ($scope, $routeParams, $location, incomeFactory, $firebaseObject, API_URL, $rootScope, currentUser) {
  var vm = this;
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

    var profileRef = new Firebase('https://bankroll.firebaseio.com/profiles/');
    profileRef.child(currentUser.uid).child('income').set(vm.income, function (err) {
      console.log('done setting income, err:', err);
      // value has been set, can redirect the user or what ever
      vm.income = {};
      $scope.$apply();
    });
  };

  // vm.onModalLoad = function () {};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvb3ZlcnZpZXcvaW5jb21lLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQ0osTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUVsQixVQUFVLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFO0FBQzNJLE1BQUksRUFBRSxHQUFHLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFkLElBQUUsQ0FBQyxVQUFVLEdBQUcsWUFBWTs7OztBQUkxQixRQUFJLFVBQVUsR0FBRyxJQUFJLFFBQVEsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0FBQzNFLGNBQVUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFTLEdBQUcsRUFBRTtBQUM3RSxhQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLEdBQUcsQ0FBQyxDQUFBOztBQUU3QyxRQUFFLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNmLFlBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUNqQixDQUFDLENBQUM7R0FDSixDQUFDOzs7Q0FHTCxDQUFDLENBQUMiLCJmaWxlIjoic3JjL2Fzc2V0cy9vdmVydmlldy9pbmNvbWUuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXJcbiAgLm1vZHVsZSgnYmFua1JvbGwnKVxuXG4gIC5jb250cm9sbGVyKCdJbmNvbWVDb250cm9sbGVyJywgZnVuY3Rpb24gKCRzY29wZSwgJHJvdXRlUGFyYW1zLCAkbG9jYXRpb24sIGluY29tZUZhY3RvcnksICRmaXJlYmFzZU9iamVjdCwgQVBJX1VSTCwgJHJvb3RTY29wZSwgY3VycmVudFVzZXIpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIC8vIHZtLmlkID0gJHJvdXRlUGFyYW1zLmlkO1xuXG4gICAgLy8gSW5jb21lLmdldE9uZSh2bS5pZCwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAvLyAgIHZtLmluY29tZSA9IGRhdGE7XG4gICAgLy8gfSk7XG5cbiAgICAvLyB2bS5kZXN0cm95ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgLy8gICBpbmNvbWVGYWN0b3J5LmRlc3Ryb3kodm0uaWQsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgJGxvY2F0aW9uLnBhdGgoJy9vdmVydmlldycpO1xuICAgIC8vICAgfSk7XG4gICAgLy8gfTtcblxuICAgIHZtLnNhdmVJbmNvbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyB2YXIgaW5jb21lUmVmID0gbmV3IEZpcmViYXNlKGBodHRwczovL2Jhbmtyb2xsLmZpcmViYXNlaW8uY29tL3Byb2ZpbGVzLyR7Y3VycmVudFVzZXIudWlkfS9pbmNvbWVgKTtcbiAgICAgIC8vIGluY29tZVJlZi5wdXNoKHsnaW5jb21lJzogJHNjb3BlLmluY29tZX0pO1xuXG4gICAgICB2YXIgcHJvZmlsZVJlZiA9IG5ldyBGaXJlYmFzZSgnaHR0cHM6Ly9iYW5rcm9sbC5maXJlYmFzZWlvLmNvbS9wcm9maWxlcy8nKTtcbiAgICAgIHByb2ZpbGVSZWYuY2hpbGQoY3VycmVudFVzZXIudWlkKS5jaGlsZCgnaW5jb21lJykuc2V0KHZtLmluY29tZSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkb25lIHNldHRpbmcgaW5jb21lLCBlcnI6JywgZXJyKVxuICAgICAgICAvLyB2YWx1ZSBoYXMgYmVlbiBzZXQsIGNhbiByZWRpcmVjdCB0aGUgdXNlciBvciB3aGF0IGV2ZXJcbiAgICAgICAgdm0uaW5jb21lID0ge307XG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyB2bS5vbk1vZGFsTG9hZCA9IGZ1bmN0aW9uICgpIHt9O1xufSk7XG4iXX0=
