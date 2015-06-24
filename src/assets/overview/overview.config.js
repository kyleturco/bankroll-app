angular
  .module('bankRoll')

  .config(function ($routeProvider) {
    $routeProvider
      .when('/overview', {
        templateUrl: 'assets/static/overview.html',
        controller: 'IncomeController',
        controllerAs: 'main',
        private: true
      })
      // .when('/people/new', {
      //   templateUrl: 'assets/people/people.html',
      //   controller: 'NewPersonCtrl',
      //   controllerAs: 'main',
      //   private: true
      // })
      // .when('/people/:id', {
      //   templateUrl: 'assets/people/person.html',
      //   controller: 'PersonController',
      //   controllerAs: 'main',
      //   private: true
      // })
      // .when('/people/:id/edit', {
      //   templateUrl: 'assets/people/person.html',
      //   controller: 'EditPersonCtrl',
      //   controllerAs: 'main',
      //   private: true
      // });
  });
