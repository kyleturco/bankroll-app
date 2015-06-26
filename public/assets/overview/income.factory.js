'use strict';

angular.module('bankRoll').factory('incomeFactory', function ($rootScope, $http, API_URL, $firebaseArray, $firebaseObject) {

  var ref = new Firebase(API_URL).child('profiles');
  var profiles = $firebaseArray(ref);

  var currentUserRef = new Firebase(API_URL + 'profiles/').orderByChild('id').equalTo($rootScope.auth.uid);
  var currentUserProfile = $firebaseObject(currentUserRef);

  profiles.$getRecord();

  // todo: save profiles with user id as firebase the object.$id

  // currentUserProfile[currentUserProfile.$id].foo = 'bar';
  // currentUserProfile.$save();

  // function incomeUrl(id) {
  //   return API_URL + '/profiles/' + $rootScope.auth.uid + '/income.json?auth=' + $rootScope.auth.token;
  // }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvb3ZlcnZpZXcvaW5jb21lLmZhY3RvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQ0osTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUVsQixPQUFPLENBQUMsZUFBZSxFQUFFLFVBQVUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRTs7QUFFL0YsTUFBSSxHQUFHLEdBQUcsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2xELE1BQUksUUFBUSxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFbkMsTUFBSSxjQUFjLEdBQUcsSUFBSSxRQUFRLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6RyxNQUFJLGtCQUFrQixHQUFHLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFekQsVUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFBOzs7Ozs7Ozs7OztBQVlyQixTQUFPOzs7Ozs7Ozs7Ozs7O0FBYUwsVUFBTSxFQUFBLGdCQUFDLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDZixXQUFLLENBQ0YsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUN2QixPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDaEI7O0dBYUYsQ0FBQTtDQUNGLENBQUMsQ0FBQyIsImZpbGUiOiJzcmMvYXNzZXRzL292ZXJ2aWV3L2luY29tZS5mYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhclxuICAubW9kdWxlKCdiYW5rUm9sbCcpXG5cbiAgLmZhY3RvcnkoJ2luY29tZUZhY3RvcnknLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGh0dHAsIEFQSV9VUkwsICRmaXJlYmFzZUFycmF5LCAkZmlyZWJhc2VPYmplY3QpIHtcblxuICAgIHZhciByZWYgPSBuZXcgRmlyZWJhc2UoQVBJX1VSTCkuY2hpbGQoJ3Byb2ZpbGVzJyk7XG4gICAgdmFyIHByb2ZpbGVzID0gJGZpcmViYXNlQXJyYXkocmVmKTtcblxuICAgIHZhciBjdXJyZW50VXNlclJlZiA9IG5ldyBGaXJlYmFzZShBUElfVVJMICsgJ3Byb2ZpbGVzLycpLm9yZGVyQnlDaGlsZCgnaWQnKS5lcXVhbFRvKCRyb290U2NvcGUuYXV0aC51aWQpO1xuICAgIHZhciBjdXJyZW50VXNlclByb2ZpbGUgPSAkZmlyZWJhc2VPYmplY3QoY3VycmVudFVzZXJSZWYpO1xuXG4gICAgcHJvZmlsZXMuJGdldFJlY29yZCgpXG5cbiAgICAvLyB0b2RvOiBzYXZlIHByb2ZpbGVzIHdpdGggdXNlciBpZCBhcyBmaXJlYmFzZSB0aGUgb2JqZWN0LiRpZFxuXG4gICAgLy8gY3VycmVudFVzZXJQcm9maWxlW2N1cnJlbnRVc2VyUHJvZmlsZS4kaWRdLmZvbyA9ICdiYXInO1xuICAgIC8vIGN1cnJlbnRVc2VyUHJvZmlsZS4kc2F2ZSgpO1xuXG5cbiAgICAvLyBmdW5jdGlvbiBpbmNvbWVVcmwoaWQpIHtcbiAgICAvLyAgIHJldHVybiBBUElfVVJMICsgJy9wcm9maWxlcy8nICsgJHJvb3RTY29wZS5hdXRoLnVpZCArICcvaW5jb21lLmpzb24/YXV0aD0nICsgJHJvb3RTY29wZS5hdXRoLnRva2VuO1xuICAgIC8vIH1cblxuICAgIHJldHVybiB7XG4gICAgICAvLyBnZXRPbmUoaWQsIGNiKSB7XG4gICAgICAvLyAgICRodHRwXG4gICAgICAvLyAgICAgLmdldChgJHtBUElfVVJMfXByb2ZpbGVzLyR7YXV0aERhdGEudWlkfS5qc29uYClcbiAgICAgIC8vICAgICAuc3VjY2VzcyhjYik7XG4gICAgICAvLyB9LFxuXG4gICAgICAvLyBnZXRBbGwoY2IpIHtcbiAgICAgIC8vICAgJGh0dHBcbiAgICAgIC8vICAgICAuZ2V0KGAke0FQSV9VUkx9cHJvZmlsZXMvJHthdXRoRGF0YS51aWR9Lmpzb25gKVxuICAgICAgLy8gICAgIC5zdWNjZXNzKGNiKTtcbiAgICAgIC8vIH0sXG5cbiAgICAgIGNyZWF0ZShkYXRhLCBjYikge1xuICAgICAgICAkaHR0cFxuICAgICAgICAgIC5wb3N0KGluY29tZVVybCgpLCBkYXRhKVxuICAgICAgICAgIC5zdWNjZXNzKGNiKTtcbiAgICAgIH0sXG5cbiAgICAgIC8vIHVwZGF0ZShpZCwgZGF0YSwgY2IpIHtcbiAgICAgIC8vICAgJGh0dHBcbiAgICAgIC8vICAgICAucHV0KGAke0FQSV9VUkx9cHJvZmlsZXMvJHthdXRoRGF0YS51aWR9Lmpzb25gLCBkYXRhKVxuICAgICAgLy8gICAgIC5zdWNjZXNzKGNiKTtcbiAgICAgIC8vIH0sXG5cbiAgICAgIC8vIGRlc3Ryb3koaWQsIGNiKSB7XG4gICAgICAvLyAgICRodHRwXG4gICAgICAvLyAgICAgLmRlbGV0ZShgJHtBUElfVVJMfXByb2ZpbGVzLyR7YXV0aERhdGEudWlkfS5qc29uYClcbiAgICAgIC8vICAgICAuc3VjY2VzcyhjYik7XG4gICAgICAvLyB9XG4gICAgfVxuICB9KTtcbiJdfQ==
