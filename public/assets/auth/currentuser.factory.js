'use strict';

angular.module('bankRoll').factory('currentUser', function () {
  var user = {};

  user.set = function (userData) {
    angular.extend(user, userData);
  };

  return user;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvYXV0aC9jdXJyZW50dXNlci5mYWN0b3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUNKLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FFbEIsT0FBTyxDQUFDLGFBQWEsRUFBRSxZQUFVO0FBQ2hDLE1BQUksSUFBSSxHQUFHLEVBQUUsQ0FBQzs7QUFFZCxNQUFJLENBQUMsR0FBRyxHQUFHLFVBQVMsUUFBUSxFQUFFO0FBQzVCLFdBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFBO0dBQy9CLENBQUE7O0FBRUQsU0FBTyxJQUFJLENBQUM7Q0FDYixDQUFDLENBQUMiLCJmaWxlIjoic3JjL2Fzc2V0cy9hdXRoL2N1cnJlbnR1c2VyLmZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyXG4gIC5tb2R1bGUoJ2JhbmtSb2xsJylcblxuICAuZmFjdG9yeSgnY3VycmVudFVzZXInLCBmdW5jdGlvbigpe1xuICAgIHZhciB1c2VyID0ge307XG5cbiAgICB1c2VyLnNldCA9IGZ1bmN0aW9uKHVzZXJEYXRhKSB7XG4gICAgICBhbmd1bGFyLmV4dGVuZCh1c2VyLCB1c2VyRGF0YSlcbiAgICB9XG5cbiAgICByZXR1cm4gdXNlcjtcbiAgfSk7XG4iXX0=
