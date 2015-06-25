'use strict';

angular.module('bankRoll').config(function ($routeProvider) {
  $routeProvider.when('/overview', {
    templateUrl: 'assets/static/overview.html',
    controller: 'IncomeController',
    controllerAs: 'main'
  });
});
// .when('/overview', {
//   templateUrl: 'assets/static/overview.html',
//   controller: 'NewIncomeCtrl',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvb3ZlcnZpZXcvb3ZlcnZpZXcuY29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUNKLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FFbEIsTUFBTSxDQUFDLFVBQVUsY0FBYyxFQUFFO0FBQ2hDLGdCQUFjLENBQ1gsSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUNqQixlQUFXLEVBQUUsNkJBQTZCO0FBQzFDLGNBQVUsRUFBRSxrQkFBa0I7QUFDOUIsZ0JBQVksRUFBRSxNQUFNO0dBQ3JCLENBQUMsQ0FBQTtDQW1CTCxDQUFDLENBQUMiLCJmaWxlIjoic3JjL2Fzc2V0cy9vdmVydmlldy9vdmVydmlldy5jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyXG4gIC5tb2R1bGUoJ2JhbmtSb2xsJylcblxuICAuY29uZmlnKGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xuICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgICAud2hlbignL292ZXJ2aWV3Jywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2Fzc2V0cy9zdGF0aWMvb3ZlcnZpZXcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdJbmNvbWVDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAnbWFpbidcbiAgICAgIH0pXG4gICAgICAvLyAud2hlbignL292ZXJ2aWV3Jywge1xuICAgICAgLy8gICB0ZW1wbGF0ZVVybDogJ2Fzc2V0cy9zdGF0aWMvb3ZlcnZpZXcuaHRtbCcsXG4gICAgICAvLyAgIGNvbnRyb2xsZXI6ICdOZXdJbmNvbWVDdHJsJyxcbiAgICAgIC8vICAgY29udHJvbGxlckFzOiAnbWFpbicsXG4gICAgICAvLyAgIHByaXZhdGU6IHRydWVcbiAgICAgIC8vIH0pXG4gICAgICAvLyAud2hlbignL3Blb3BsZS86aWQnLCB7XG4gICAgICAvLyAgIHRlbXBsYXRlVXJsOiAnYXNzZXRzL3Blb3BsZS9wZXJzb24uaHRtbCcsXG4gICAgICAvLyAgIGNvbnRyb2xsZXI6ICdQZXJzb25Db250cm9sbGVyJyxcbiAgICAgIC8vICAgY29udHJvbGxlckFzOiAnbWFpbicsXG4gICAgICAvLyAgIHByaXZhdGU6IHRydWVcbiAgICAgIC8vIH0pXG4gICAgICAvLyAud2hlbignL3Blb3BsZS86aWQvZWRpdCcsIHtcbiAgICAgIC8vICAgdGVtcGxhdGVVcmw6ICdhc3NldHMvcGVvcGxlL3BlcnNvbi5odG1sJyxcbiAgICAgIC8vICAgY29udHJvbGxlcjogJ0VkaXRQZXJzb25DdHJsJyxcbiAgICAgIC8vICAgY29udHJvbGxlckFzOiAnbWFpbicsXG4gICAgICAvLyAgIHByaXZhdGU6IHRydWVcbiAgICAgIC8vIH0pO1xuICB9KTtcbiJdfQ==
