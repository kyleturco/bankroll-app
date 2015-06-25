'use strict';

angular.module('bankRoll').config(function ($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'assets/auth/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'auth',
    resolve: {
      checkLogin: function checkLogin($rootScope, $location) {
        if ($rootScope.auth) {
          $location.path('/overview');
        } else {
          $location.path('/login');
        }
      }
    }
  }).when('/register', {
    templateUrl: 'assets/auth/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'auth',
    resolve: {
      checkLogin: function checkLogin($rootScope, $location) {
        if ($rootScope.auth) {
          $location.path('/overview');
        } else {
          $location.path('/register');
        }
      }
    }
  }).when('/logout', {
    template: '<h1>Logging out...</h1>',
    controller: 'LogoutCtrl'
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvYXV0aC9hdXRoLmNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FDSixNQUFNLENBQUMsVUFBVSxDQUFDLENBRWxCLE1BQU0sQ0FBQyxVQUFVLGNBQWMsRUFBRTtBQUNoQyxnQkFBYyxDQUNYLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDZCxlQUFXLEVBQUUsd0JBQXdCO0FBQ3JDLGNBQVUsRUFBRSxXQUFXO0FBQ3ZCLGdCQUFZLEVBQUUsTUFBTTtBQUNwQixXQUFPLEVBQUU7QUFDUCxnQkFBVSxFQUFFLG9CQUFVLFVBQVUsRUFBRSxTQUFTLEVBQUU7QUFDM0MsWUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFO0FBQ25CLG1CQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1NBQzVCLE1BQU07QUFDTCxtQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtTQUN2QjtPQUNGO0tBQ0Y7R0FDRixDQUFDLENBRUgsSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUNqQixlQUFXLEVBQUUsMkJBQTJCO0FBQ3hDLGNBQVUsRUFBRSxjQUFjO0FBQzFCLGdCQUFZLEVBQUUsTUFBTTtBQUNwQixXQUFPLEVBQUU7QUFDUCxnQkFBVSxFQUFFLG9CQUFVLFVBQVUsRUFBRSxTQUFTLEVBQUU7QUFDM0MsWUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFO0FBQ25CLG1CQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1NBQzVCLE1BQU07QUFDTCxtQkFBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUMxQjtPQUNGO0tBQ0Y7R0FDRixDQUFDLENBRUgsSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNmLFlBQVEsRUFBRSx5QkFBeUI7QUFDbkMsY0FBVSxFQUFFLFlBQVk7R0FDekIsQ0FBQyxDQUFBO0NBQ0gsQ0FBQyxDQUFDIiwiZmlsZSI6InNyYy9hc3NldHMvYXV0aC9hdXRoLmNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXJcbiAgLm1vZHVsZSgnYmFua1JvbGwnKVxuXG4gIC5jb25maWcoZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyKSB7XG4gICAgJHJvdXRlUHJvdmlkZXJcbiAgICAgIC53aGVuKCcvbG9naW4nLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXNzZXRzL2F1dGgvbG9naW4uaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkN0cmwnLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdhdXRoJyxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIGNoZWNrTG9naW46IGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkbG9jYXRpb24pIHtcbiAgICAgICAgICAgIGlmICgkcm9vdFNjb3BlLmF1dGgpIHtcbiAgICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgoJy9vdmVydmlldycpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aCgnL2xvZ2luJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgLndoZW4oJy9yZWdpc3RlcicsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhc3NldHMvYXV0aC9yZWdpc3Rlci5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1JlZ2lzdGVyQ3RybCcsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2F1dGgnLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgY2hlY2tMb2dpbjogZnVuY3Rpb24gKCRyb290U2NvcGUsICRsb2NhdGlvbikge1xuICAgICAgICAgICAgaWYgKCRyb290U2NvcGUuYXV0aCkge1xuICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aCgnL292ZXJ2aWV3JylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICRsb2NhdGlvbi5wYXRoKCcvcmVnaXN0ZXInKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAud2hlbignL2xvZ291dCcsIHtcbiAgICAgICAgdGVtcGxhdGU6ICc8aDE+TG9nZ2luZyBvdXQuLi48L2gxPicsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdMb2dvdXRDdHJsJ1xuICAgICAgfSlcbiAgICB9KTtcbiJdfQ==
