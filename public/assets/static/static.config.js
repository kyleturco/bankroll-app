'use strict';

angular.module('bankRoll').config(function ($routeProvider) {
  $routeProvider.when('/overview', {
    templateUrl: 'assets/static/overview.html'
  }).when('/profile', {
    templateUrl: 'assets/static/profile.html'
  }).otherwise({
    templateUrl: 'assets/static/404.html'
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3RhdGljL3N0YXRpYy5jb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQ0osTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNsQixNQUFNLENBQUMsVUFBVSxjQUFjLEVBQUU7QUFDaEMsZ0JBQWMsQ0FDWCxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQ2pCLGVBQVcsRUFBRSw2QkFBNkI7R0FDM0MsQ0FBQyxDQUNELElBQUksQ0FBQyxVQUFVLEVBQUU7QUFDaEIsZUFBVyxFQUFFLDRCQUE0QjtHQUMxQyxDQUFDLENBRUQsU0FBUyxDQUFDO0FBQ1QsZUFBVyxFQUFFLHdCQUF3QjtHQUN0QyxDQUFDLENBQUM7Q0FDTixDQUFDLENBQUEiLCJmaWxlIjoic3JjL2Fzc2V0cy9zdGF0aWMvc3RhdGljLmNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXJcbiAgLm1vZHVsZSgnYmFua1JvbGwnKVxuICAuY29uZmlnKGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xuICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgICAud2hlbignL292ZXJ2aWV3Jywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2Fzc2V0cy9zdGF0aWMvb3ZlcnZpZXcuaHRtbCdcbiAgICAgIH0pXG4gICAgICAud2hlbignL3Byb2ZpbGUnLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXNzZXRzL3N0YXRpYy9wcm9maWxlLmh0bWwnXG4gICAgICB9KVxuXG4gICAgICAub3RoZXJ3aXNlKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhc3NldHMvc3RhdGljLzQwNC5odG1sJ1xuICAgICAgfSk7XG4gIH0pXG4iXX0=
