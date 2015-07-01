'use strict';

angular.module('bankRoll').controller('IncomeController', function ($scope, incomeFactory, $firebaseObject, API_URL, $rootScope, currentUser) {
  var vm = this;

  currentUser.getAll(function (income) {
    vm.income = income;
  });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvb3ZlcnZpZXcvaW5jb21lLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQ0osTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUVsQixVQUFVLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxNQUFNLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRTtBQUNsSCxNQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7O0FBRWQsYUFBVyxDQUFDLE1BQU0sQ0FBQyxVQUFTLE1BQU0sRUFBQztBQUNqQyxNQUFFLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztHQUNwQixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhSCxJQUFFLENBQUMsVUFBVSxHQUFHLFlBQVk7OztBQUcxQixRQUFJLE9BQU8sR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQyxBQUFDLENBQUM7QUFDN0QsUUFBSSxVQUFVLEdBQUcsSUFBSSxRQUFRLENBQUMsMkNBQTJDLENBQUMsQ0FBQztBQUMzRSxVQUFNLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNoRCxjQUFVLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBSSxPQUFPLEFBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVMsR0FBRyxFQUFFO0FBQ3pHLGFBQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsR0FBRyxDQUFDLENBQUE7OztBQUc3QyxRQUFFLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNmLFlBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUNqQixDQUFDLENBQUM7R0FDSixDQUFDOzs7Q0FHTCxDQUFDLENBQUMiLCJmaWxlIjoic3JjL2Fzc2V0cy9vdmVydmlldy9pbmNvbWUuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXJcbiAgLm1vZHVsZSgnYmFua1JvbGwnKVxuXG4gIC5jb250cm9sbGVyKCdJbmNvbWVDb250cm9sbGVyJywgZnVuY3Rpb24gKCRzY29wZSwgaW5jb21lRmFjdG9yeSwgJGZpcmViYXNlT2JqZWN0LCBBUElfVVJMLCAkcm9vdFNjb3BlLCBjdXJyZW50VXNlcikge1xuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICBjdXJyZW50VXNlci5nZXRBbGwoZnVuY3Rpb24oaW5jb21lKXtcbiAgICAgIHZtLmluY29tZSA9IGluY29tZTtcbiAgICB9KTtcbiAgICAvLyB2bS5pZCA9ICRyb3V0ZVBhcmFtcy5pZDtcblxuICAgIC8vIEluY29tZS5nZXRPbmUodm0uaWQsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgLy8gICB2bS5pbmNvbWUgPSBkYXRhO1xuICAgIC8vIH0pO1xuXG4gICAgLy8gdm0uZGVzdHJveSA9IGZ1bmN0aW9uIChpZCkge1xuICAgIC8vICAgaW5jb21lRmFjdG9yeS5kZXN0cm95KHZtLmlkLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgICRsb2NhdGlvbi5wYXRoKCcvb3ZlcnZpZXcnKTtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH07XG5cbiAgICB2bS5zYXZlSW5jb21lID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gdmFyIGluY29tZVJlZiA9IG5ldyBGaXJlYmFzZShgaHR0cHM6Ly9iYW5rcm9sbC5maXJlYmFzZWlvLmNvbS9wcm9maWxlcy8ke2N1cnJlbnRVc2VyLnVpZH0vaW5jb21lYCk7XG4gICAgICAvLyBpbmNvbWVSZWYucHVzaCh7J2luY29tZSc6ICRzY29wZS5pbmNvbWV9KTtcbiAgICAgIHZhciByYW5kTnVtID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDAwMDAwMDApKTtcbiAgICAgIHZhciBwcm9maWxlUmVmID0gbmV3IEZpcmViYXNlKCdodHRwczovL2Jhbmtyb2xsLmZpcmViYXNlaW8uY29tL3Byb2ZpbGVzLycpO1xuICAgICAgJHNjb3BlLmluY29tZUxpc3QgPSAkZmlyZWJhc2VPYmplY3QocHJvZmlsZVJlZik7XG4gICAgICBwcm9maWxlUmVmLmNoaWxkKGN1cnJlbnRVc2VyLnVpZCkuY2hpbGQoJ2luY29tZScpLmNoaWxkKCdpbmNvbWUnICsgKHJhbmROdW0pKS5zZXQodm0uaW5jb21lLCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RvbmUgc2V0dGluZyBpbmNvbWUsIGVycjonLCBlcnIpXG5cbiAgICAgICAgLy8gdmFsdWUgaGFzIGJlZW4gc2V0LCBjYW4gcmVkaXJlY3QgdGhlIHVzZXIgb3Igd2hhdCBldmVyXG4gICAgICAgIHZtLmluY29tZSA9IHt9O1xuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gdm0ub25Nb2RhbExvYWQgPSBmdW5jdGlvbiAoKSB7fTtcbn0pO1xuIl19
