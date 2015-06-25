angular
  .module('bankRoll')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'assets/auth/login.html'
      })
      .when('/register', {
        templateUrl: 'assets/auth/register.html'
      })
      .when('/profile', {
        templateUrl: 'assets/static/profile.html'
      })

      .otherwise({
        templateUrl: 'assets/static/404.html'
      });
  })
