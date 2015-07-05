angular
  .module('bankRoll')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'assets/static/landing.html',
        controller: 'ButtonController',
        controllerAs: 'button'
      })
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
