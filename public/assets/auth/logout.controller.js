'use strict';

angular.module('bankRoll').controller('LogoutCtrl', function ($rootScope, $scope, $location, API_URL) {
  var fb = new Firebase(API_URL);

  fb.unauth(function () {
    $rootScope.auth = null;
    $location.path('/login');
    $scope.$apply();
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvYXV0aC9sb2dvdXQuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FDSixNQUFNLENBQUMsVUFBVSxDQUFDLENBRWxCLFVBQVUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUU7QUFDMUUsTUFBSSxFQUFFLEdBQUcsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRS9CLElBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWTtBQUNwQixjQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUN2QixhQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3pCLFVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztHQUNqQixDQUFDLENBQUM7Q0FDSixDQUFDLENBQUMiLCJmaWxlIjoic3JjL2Fzc2V0cy9hdXRoL2xvZ291dC5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhclxuICAubW9kdWxlKCdiYW5rUm9sbCcpXG5cbiAgLmNvbnRyb2xsZXIoJ0xvZ291dEN0cmwnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHNjb3BlLCAkbG9jYXRpb24sIEFQSV9VUkwpIHtcbiAgICB2YXIgZmIgPSBuZXcgRmlyZWJhc2UoQVBJX1VSTCk7XG5cbiAgICBmYi51bmF1dGgoZnVuY3Rpb24gKCkge1xuICAgICAgJHJvb3RTY29wZS5hdXRoID0gbnVsbDtcbiAgICAgICRsb2NhdGlvbi5wYXRoKCcvbG9naW4nKTtcbiAgICAgICRzY29wZS4kYXBwbHkoKTtcbiAgICB9KTtcbiAgfSk7XG4iXX0=
