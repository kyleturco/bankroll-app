'use strict';

angular.module('bankRoll').config(function ($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'assets/auth/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'auth',
    resolve: {
      checkLogin: function checkLogin($rootScope, $location) {
        if ($rootScope.auth) {
          $location.path('/people');
        }
      }
    }
  }).when('/logout', {
    template: '<h1>Logging out...</h1>',
    controller: 'LogoutCtrl'
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvYXV0aC9hdXRoLmNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FDSixNQUFNLENBQUMsVUFBVSxDQUFDLENBRWxCLE1BQU0sQ0FBQyxVQUFVLGNBQWMsRUFBRTtBQUNoQyxnQkFBYyxDQUNYLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDZCxlQUFXLEVBQUUsd0JBQXdCO0FBQ3JDLGNBQVUsRUFBRSxXQUFXO0FBQ3ZCLGdCQUFZLEVBQUUsTUFBTTtBQUNwQixXQUFPLEVBQUU7QUFDUCxnQkFBVSxFQUFFLG9CQUFVLFVBQVUsRUFBRSxTQUFTLEVBQUU7QUFDM0MsWUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFO0FBQ25CLG1CQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1NBQzFCO09BQ0Y7S0FDRjtHQUNGLENBQUMsQ0FFRCxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQ2YsWUFBUSxFQUFFLHlCQUF5QjtBQUNuQyxjQUFVLEVBQUUsWUFBWTtHQUN6QixDQUFDLENBQUM7Q0FDTixDQUFDLENBQUMiLCJmaWxlIjoic3JjL2Fzc2V0cy9hdXRoL2F1dGguY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhclxuICAubW9kdWxlKCdiYW5rUm9sbCcpXG5cbiAgLmNvbmZpZyhmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIpIHtcbiAgICAkcm91dGVQcm92aWRlclxuICAgICAgLndoZW4oJy9sb2dpbicsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhc3NldHMvYXV0aC9sb2dpbi5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0xvZ2luQ3RybCcsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2F1dGgnLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgY2hlY2tMb2dpbjogZnVuY3Rpb24gKCRyb290U2NvcGUsICRsb2NhdGlvbikge1xuICAgICAgICAgICAgaWYgKCRyb290U2NvcGUuYXV0aCkge1xuICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aCgnL3Blb3BsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAud2hlbignL2xvZ291dCcsIHtcbiAgICAgICAgdGVtcGxhdGU6ICc8aDE+TG9nZ2luZyBvdXQuLi48L2gxPicsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdMb2dvdXRDdHJsJ1xuICAgICAgfSk7XG4gIH0pO1xuIl19
