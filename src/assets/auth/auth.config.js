angular
  .module('bankRoll')

  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'assets/auth/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'auth',
        resolve: {
          checkLogin: function ($rootScope, $location) {
            if ($rootScope.auth) {
              $location.path('/overview')
            } else {
              $location.path('/login')
              }
            }
          }
        })

      .when('/logout', {
        template: '<h1>Logging out...</h1>',
        controller: 'LogoutCtrl'
      })
    });
