'use strict';

angular.module('bankRoll').controller('IncomeController', function ($scope, incomeFactory, $firebaseObject, API_URL, $rootScope, currentUser) {
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
    var randNum = Math.floor(Math.random() * 1000000000000000);
    var profileRef = new Firebase('https://bankroll.firebaseio.com/profiles/');
    profileRef.child(currentUser.uid).child('income').child('income' + randNum).set(vm.income, function (err) {
      console.log('done setting income, err:', err);
      // value has been set, can redirect the user or what ever
      vm.income = {};
      $scope.$apply();
      console.log('did this update3?');
    });
  };

  // vm.onModalLoad = function () {};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvb3ZlcnZpZXcvaW5jb21lLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQ0osTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUVsQixVQUFVLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxNQUFNLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRTtBQUNsSCxNQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhZCxJQUFFLENBQUMsVUFBVSxHQUFHLFlBQVk7OztBQUcxQixRQUFJLE9BQU8sR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQyxBQUFDLENBQUM7QUFDN0QsUUFBSSxVQUFVLEdBQUcsSUFBSSxRQUFRLENBQUMsMkNBQTJDLENBQUMsQ0FBQztBQUMzRSxjQUFVLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBSSxPQUFPLEFBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVMsR0FBRyxFQUFFO0FBQ3pHLGFBQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsR0FBRyxDQUFDLENBQUE7O0FBRTdDLFFBQUUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2YsWUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hCLGFBQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtLQUNqQyxDQUFDLENBQUM7R0FDSixDQUFDOzs7Q0FHTCxDQUFDLENBQUMiLCJmaWxlIjoic3JjL2Fzc2V0cy9vdmVydmlldy9pbmNvbWUuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXJcbiAgLm1vZHVsZSgnYmFua1JvbGwnKVxuXG4gIC5jb250cm9sbGVyKCdJbmNvbWVDb250cm9sbGVyJywgZnVuY3Rpb24gKCRzY29wZSwgaW5jb21lRmFjdG9yeSwgJGZpcmViYXNlT2JqZWN0LCBBUElfVVJMLCAkcm9vdFNjb3BlLCBjdXJyZW50VXNlcikge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgLy8gdm0uaWQgPSAkcm91dGVQYXJhbXMuaWQ7XG5cbiAgICAvLyBJbmNvbWUuZ2V0T25lKHZtLmlkLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgIC8vICAgdm0uaW5jb21lID0gZGF0YTtcbiAgICAvLyB9KTtcblxuICAgIC8vIHZtLmRlc3Ryb3kgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAvLyAgIGluY29tZUZhY3RvcnkuZGVzdHJveSh2bS5pZCwgZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAkbG9jYXRpb24ucGF0aCgnL292ZXJ2aWV3Jyk7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9O1xuXG4gICAgdm0uc2F2ZUluY29tZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHZhciBpbmNvbWVSZWYgPSBuZXcgRmlyZWJhc2UoYGh0dHBzOi8vYmFua3JvbGwuZmlyZWJhc2Vpby5jb20vcHJvZmlsZXMvJHtjdXJyZW50VXNlci51aWR9L2luY29tZWApO1xuICAgICAgLy8gaW5jb21lUmVmLnB1c2goeydpbmNvbWUnOiAkc2NvcGUuaW5jb21lfSk7XG4gICAgICB2YXIgcmFuZE51bSA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwMDAwMDAwKSk7XG4gICAgICB2YXIgcHJvZmlsZVJlZiA9IG5ldyBGaXJlYmFzZSgnaHR0cHM6Ly9iYW5rcm9sbC5maXJlYmFzZWlvLmNvbS9wcm9maWxlcy8nKTtcbiAgICAgIHByb2ZpbGVSZWYuY2hpbGQoY3VycmVudFVzZXIudWlkKS5jaGlsZCgnaW5jb21lJykuY2hpbGQoJ2luY29tZScgKyAocmFuZE51bSkpLnNldCh2bS5pbmNvbWUsIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnZG9uZSBzZXR0aW5nIGluY29tZSwgZXJyOicsIGVycilcbiAgICAgICAgLy8gdmFsdWUgaGFzIGJlZW4gc2V0LCBjYW4gcmVkaXJlY3QgdGhlIHVzZXIgb3Igd2hhdCBldmVyXG4gICAgICAgIHZtLmluY29tZSA9IHt9O1xuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkaWQgdGhpcyB1cGRhdGUzPycpXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gdm0ub25Nb2RhbExvYWQgPSBmdW5jdGlvbiAoKSB7fTtcbn0pO1xuIl19
