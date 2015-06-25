'use strict';

angular.module('bankRoll').factory('incomeFactory', function ($rootScope, $http, API_URL) {

  function incomeUrl(id) {
    return API_URL + '/profiles/' + $rootScope.auth.uid + '/income.json?auth=' + $rootScope.auth.token;
  }

  return {
    // getOne(id, cb) {
    //   $http
    //     .get(`${API_URL}profiles/${authData.uid}.json`)
    //     .success(cb);
    // },

    // getAll(cb) {
    //   $http
    //     .get(`${API_URL}profiles/${authData.uid}.json`)
    //     .success(cb);
    // },

    create: function create(data, cb) {
      $http.post(incomeUrl(), data).success(cb);
    }

  };
});
// update(id, data, cb) {
//   $http
//     .put(`${API_URL}profiles/${authData.uid}.json`, data)
//     .success(cb);
// },

// destroy(id, cb) {
//   $http
//     .delete(`${API_URL}profiles/${authData.uid}.json`)
//     .success(cb);
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvb3ZlcnZpZXcvaW5jb21lLmZhY3RvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQ0osTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUVsQixPQUFPLENBQUMsZUFBZSxFQUFFLFVBQVUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7O0FBRTlELFdBQVMsU0FBUyxDQUFDLEVBQUUsRUFBRTtBQUNyQixXQUFPLE9BQU8sR0FBRyxZQUFZLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsb0JBQW9CLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7R0FDcEc7O0FBRUQsU0FBTzs7Ozs7Ozs7Ozs7OztBQWFMLFVBQU0sRUFBQSxnQkFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFO0FBQ2YsV0FBSyxDQUNGLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FDdkIsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2hCOztHQWFGLENBQUE7Q0FDRixDQUFDLENBQUMiLCJmaWxlIjoic3JjL2Fzc2V0cy9vdmVydmlldy9pbmNvbWUuZmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXJcbiAgLm1vZHVsZSgnYmFua1JvbGwnKVxuXG4gIC5mYWN0b3J5KCdpbmNvbWVGYWN0b3J5JywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRodHRwLCBBUElfVVJMKSB7XG5cbiAgICBmdW5jdGlvbiBpbmNvbWVVcmwoaWQpIHtcbiAgICAgIHJldHVybiBBUElfVVJMICsgJy9wcm9maWxlcy8nICsgJHJvb3RTY29wZS5hdXRoLnVpZCArICcvaW5jb21lLmpzb24/YXV0aD0nICsgJHJvb3RTY29wZS5hdXRoLnRva2VuO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAvLyBnZXRPbmUoaWQsIGNiKSB7XG4gICAgICAvLyAgICRodHRwXG4gICAgICAvLyAgICAgLmdldChgJHtBUElfVVJMfXByb2ZpbGVzLyR7YXV0aERhdGEudWlkfS5qc29uYClcbiAgICAgIC8vICAgICAuc3VjY2VzcyhjYik7XG4gICAgICAvLyB9LFxuXG4gICAgICAvLyBnZXRBbGwoY2IpIHtcbiAgICAgIC8vICAgJGh0dHBcbiAgICAgIC8vICAgICAuZ2V0KGAke0FQSV9VUkx9cHJvZmlsZXMvJHthdXRoRGF0YS51aWR9Lmpzb25gKVxuICAgICAgLy8gICAgIC5zdWNjZXNzKGNiKTtcbiAgICAgIC8vIH0sXG5cbiAgICAgIGNyZWF0ZShkYXRhLCBjYikge1xuICAgICAgICAkaHR0cFxuICAgICAgICAgIC5wb3N0KGluY29tZVVybCgpLCBkYXRhKVxuICAgICAgICAgIC5zdWNjZXNzKGNiKTtcbiAgICAgIH0sXG5cbiAgICAgIC8vIHVwZGF0ZShpZCwgZGF0YSwgY2IpIHtcbiAgICAgIC8vICAgJGh0dHBcbiAgICAgIC8vICAgICAucHV0KGAke0FQSV9VUkx9cHJvZmlsZXMvJHthdXRoRGF0YS51aWR9Lmpzb25gLCBkYXRhKVxuICAgICAgLy8gICAgIC5zdWNjZXNzKGNiKTtcbiAgICAgIC8vIH0sXG5cbiAgICAgIC8vIGRlc3Ryb3koaWQsIGNiKSB7XG4gICAgICAvLyAgICRodHRwXG4gICAgICAvLyAgICAgLmRlbGV0ZShgJHtBUElfVVJMfXByb2ZpbGVzLyR7YXV0aERhdGEudWlkfS5qc29uYClcbiAgICAgIC8vICAgICAuc3VjY2VzcyhjYik7XG4gICAgICAvLyB9XG4gICAgfVxuICB9KTtcbiJdfQ==
