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

    var profileRef = new Firebase('https://bankroll.firebaseio.com/profiles/');
    profileRef.child(currentUser.uid).child('income').child(vm.income.name).set(vm.income, function (err) {
      console.log('done setting income, err:', err);
      // value has been set, can redirect the user or what ever
      vm.income = {};
      $scope.$apply();
      console.log('did this update3?');
    });
  };

  // vm.onModalLoad = function () {};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvb3ZlcnZpZXcvaW5jb21lLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQ0osTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUVsQixVQUFVLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxNQUFNLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRTtBQUNsSCxNQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhZCxJQUFFLENBQUMsVUFBVSxHQUFHLFlBQVk7Ozs7QUFJMUIsUUFBSSxVQUFVLEdBQUcsSUFBSSxRQUFRLENBQUMsMkNBQTJDLENBQUMsQ0FBQztBQUMzRSxjQUFVLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBUyxHQUFHLEVBQUU7QUFDbkcsYUFBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxHQUFHLENBQUMsQ0FBQTs7QUFFN0MsUUFBRSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDZixZQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEIsYUFBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO0tBQ2pDLENBQUMsQ0FBQztHQUNKLENBQUM7OztDQUdMLENBQUMsQ0FBQyIsImZpbGUiOiJzcmMvYXNzZXRzL292ZXJ2aWV3L2luY29tZS5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhclxuICAubW9kdWxlKCdiYW5rUm9sbCcpXG5cbiAgLmNvbnRyb2xsZXIoJ0luY29tZUNvbnRyb2xsZXInLCBmdW5jdGlvbiAoJHNjb3BlLCBpbmNvbWVGYWN0b3J5LCAkZmlyZWJhc2VPYmplY3QsIEFQSV9VUkwsICRyb290U2NvcGUsIGN1cnJlbnRVc2VyKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICAvLyB2bS5pZCA9ICRyb3V0ZVBhcmFtcy5pZDtcblxuICAgIC8vIEluY29tZS5nZXRPbmUodm0uaWQsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgLy8gICB2bS5pbmNvbWUgPSBkYXRhO1xuICAgIC8vIH0pO1xuXG4gICAgLy8gdm0uZGVzdHJveSA9IGZ1bmN0aW9uIChpZCkge1xuICAgIC8vICAgaW5jb21lRmFjdG9yeS5kZXN0cm95KHZtLmlkLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgICRsb2NhdGlvbi5wYXRoKCcvb3ZlcnZpZXcnKTtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH07XG5cbiAgICB2bS5zYXZlSW5jb21lID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gdmFyIGluY29tZVJlZiA9IG5ldyBGaXJlYmFzZShgaHR0cHM6Ly9iYW5rcm9sbC5maXJlYmFzZWlvLmNvbS9wcm9maWxlcy8ke2N1cnJlbnRVc2VyLnVpZH0vaW5jb21lYCk7XG4gICAgICAvLyBpbmNvbWVSZWYucHVzaCh7J2luY29tZSc6ICRzY29wZS5pbmNvbWV9KTtcblxuICAgICAgdmFyIHByb2ZpbGVSZWYgPSBuZXcgRmlyZWJhc2UoJ2h0dHBzOi8vYmFua3JvbGwuZmlyZWJhc2Vpby5jb20vcHJvZmlsZXMvJyk7XG4gICAgICBwcm9maWxlUmVmLmNoaWxkKGN1cnJlbnRVc2VyLnVpZCkuY2hpbGQoJ2luY29tZScpLmNoaWxkKHZtLmluY29tZS5uYW1lKS5zZXQodm0uaW5jb21lLCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RvbmUgc2V0dGluZyBpbmNvbWUsIGVycjonLCBlcnIpXG4gICAgICAgIC8vIHZhbHVlIGhhcyBiZWVuIHNldCwgY2FuIHJlZGlyZWN0IHRoZSB1c2VyIG9yIHdoYXQgZXZlclxuICAgICAgICB2bS5pbmNvbWUgPSB7fTtcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xuICAgICAgICBjb25zb2xlLmxvZygnZGlkIHRoaXMgdXBkYXRlMz8nKVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIHZtLm9uTW9kYWxMb2FkID0gZnVuY3Rpb24gKCkge307XG59KTtcbiJdfQ==
