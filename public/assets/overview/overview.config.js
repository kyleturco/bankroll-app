'use strict';

angular.module('bankRoll').config(function ($routeProvider) {
  $routeProvider.when('/overview', {
    templateUrl: 'assets/static/overview.html',
    controller: 'FinanceController',
    controllerAs: 'main'
  });
});
// .when('/overview', {
//   templateUrl: 'assets/static/overview.html',
//   controller: 'ExpenseController',
//   controllerAs: 'second',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvb3ZlcnZpZXcvb3ZlcnZpZXcuY29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUNKLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FFbEIsTUFBTSxDQUFDLFVBQVUsY0FBYyxFQUFFO0FBQ2hDLGdCQUFjLENBQ1gsSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUNqQixlQUFXLEVBQUUsNkJBQTZCO0FBQzFDLGNBQVUsRUFBRSxtQkFBbUI7QUFDL0IsZ0JBQVksRUFBRSxNQUFNO0dBQ3JCLENBQUMsQ0FBQTtDQWtCTCxDQUFDLENBQUMiLCJmaWxlIjoic3JjL2Fzc2V0cy9vdmVydmlldy9vdmVydmlldy5jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyXG4gIC5tb2R1bGUoJ2JhbmtSb2xsJylcblxuICAuY29uZmlnKGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xuICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgICAud2hlbignL292ZXJ2aWV3Jywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2Fzc2V0cy9zdGF0aWMvb3ZlcnZpZXcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdGaW5hbmNlQ29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ21haW4nXG4gICAgICB9KVxuICAgICAgLy8gLndoZW4oJy9vdmVydmlldycsIHtcbiAgICAgIC8vICAgdGVtcGxhdGVVcmw6ICdhc3NldHMvc3RhdGljL292ZXJ2aWV3Lmh0bWwnLFxuICAgICAgLy8gICBjb250cm9sbGVyOiAnRXhwZW5zZUNvbnRyb2xsZXInLFxuICAgICAgLy8gICBjb250cm9sbGVyQXM6ICdzZWNvbmQnLFxuICAgICAgLy8gfSlcbiAgICAgIC8vIC53aGVuKCcvcGVvcGxlLzppZCcsIHtcbiAgICAgIC8vICAgdGVtcGxhdGVVcmw6ICdhc3NldHMvcGVvcGxlL3BlcnNvbi5odG1sJyxcbiAgICAgIC8vICAgY29udHJvbGxlcjogJ1BlcnNvbkNvbnRyb2xsZXInLFxuICAgICAgLy8gICBjb250cm9sbGVyQXM6ICdtYWluJyxcbiAgICAgIC8vICAgcHJpdmF0ZTogdHJ1ZVxuICAgICAgLy8gfSlcbiAgICAgIC8vIC53aGVuKCcvcGVvcGxlLzppZC9lZGl0Jywge1xuICAgICAgLy8gICB0ZW1wbGF0ZVVybDogJ2Fzc2V0cy9wZW9wbGUvcGVyc29uLmh0bWwnLFxuICAgICAgLy8gICBjb250cm9sbGVyOiAnRWRpdFBlcnNvbkN0cmwnLFxuICAgICAgLy8gICBjb250cm9sbGVyQXM6ICdtYWluJyxcbiAgICAgIC8vICAgcHJpdmF0ZTogdHJ1ZVxuICAgICAgLy8gfSk7XG4gIH0pO1xuIl19
