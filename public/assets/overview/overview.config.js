'use strict';

angular.module('bankRoll').config(function ($routeProvider) {
  $routeProvider.when('/overview', {
    templateUrl: 'assets/static/overview.html',
    controller: 'IncomeController',
    controllerAs: 'main'
  }).when('/overview', {
    templateUrl: 'assets/static/overview.html',
    controller: 'ExpenseController',
    controllerAs: 'second'
  });
});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvb3ZlcnZpZXcvb3ZlcnZpZXcuY29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUNKLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FFbEIsTUFBTSxDQUFDLFVBQVUsY0FBYyxFQUFFO0FBQ2hDLGdCQUFjLENBQ1gsSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUNqQixlQUFXLEVBQUUsNkJBQTZCO0FBQzFDLGNBQVUsRUFBRSxrQkFBa0I7QUFDOUIsZ0JBQVksRUFBRSxNQUFNO0dBQ3JCLENBQUMsQ0FDRCxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQ2pCLGVBQVcsRUFBRSw2QkFBNkI7QUFDMUMsY0FBVSxFQUFFLG1CQUFtQjtBQUMvQixnQkFBWSxFQUFFLFFBQVE7R0FDdkIsQ0FBQyxDQUFBO0NBYUwsQ0FBQyxDQUFDIiwiZmlsZSI6InNyYy9hc3NldHMvb3ZlcnZpZXcvb3ZlcnZpZXcuY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhclxuICAubW9kdWxlKCdiYW5rUm9sbCcpXG5cbiAgLmNvbmZpZyhmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIpIHtcbiAgICAkcm91dGVQcm92aWRlclxuICAgICAgLndoZW4oJy9vdmVydmlldycsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhc3NldHMvc3RhdGljL292ZXJ2aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnSW5jb21lQ29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ21haW4nXG4gICAgICB9KVxuICAgICAgLndoZW4oJy9vdmVydmlldycsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhc3NldHMvc3RhdGljL292ZXJ2aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnRXhwZW5zZUNvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdzZWNvbmQnLFxuICAgICAgfSlcbiAgICAgIC8vIC53aGVuKCcvcGVvcGxlLzppZCcsIHtcbiAgICAgIC8vICAgdGVtcGxhdGVVcmw6ICdhc3NldHMvcGVvcGxlL3BlcnNvbi5odG1sJyxcbiAgICAgIC8vICAgY29udHJvbGxlcjogJ1BlcnNvbkNvbnRyb2xsZXInLFxuICAgICAgLy8gICBjb250cm9sbGVyQXM6ICdtYWluJyxcbiAgICAgIC8vICAgcHJpdmF0ZTogdHJ1ZVxuICAgICAgLy8gfSlcbiAgICAgIC8vIC53aGVuKCcvcGVvcGxlLzppZC9lZGl0Jywge1xuICAgICAgLy8gICB0ZW1wbGF0ZVVybDogJ2Fzc2V0cy9wZW9wbGUvcGVyc29uLmh0bWwnLFxuICAgICAgLy8gICBjb250cm9sbGVyOiAnRWRpdFBlcnNvbkN0cmwnLFxuICAgICAgLy8gICBjb250cm9sbGVyQXM6ICdtYWluJyxcbiAgICAgIC8vICAgcHJpdmF0ZTogdHJ1ZVxuICAgICAgLy8gfSk7XG4gIH0pO1xuIl19
