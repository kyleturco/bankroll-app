angular
  .module('bankRoll')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/overview', {
        templateUrl: 'assets/static/overview.html'
      })
      .when('/profile', {
        templateUrl: 'assets/static/profile.html'
      })

      .otherwise({
        templateUrl: 'assets/static/404.html'
      });
  })
