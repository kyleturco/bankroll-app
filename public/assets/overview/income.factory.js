'use strict';

angular.module('bankRoll').factory('incomeFactory', function ($rootScope, $http, API_URL, $firebaseArray, $firebaseObject, currentUser) {

  var ref = new Firebase(API_URL).child('profiles');
  var profiles = $firebaseArray(ref);

  var currentUserRef = new Firebase(API_URL + 'profiles/').orderByChild('id').equalTo($rootScope.auth.uid);
  var currentUserProfile = $firebaseObject(currentUserRef);

  profiles.$getRecord();

  return {};
});

// getOne(id, cb) {
//   $http
//     .get(currentUserRef)
//     .success(cb);
//     console.log("did anything happen with this? 1")
// },

// allIncome(cb) {
//   $http
//     .get('https://bankroll.firebaseio.com/profiles/simplelogin%3A84/income.json')
//     // .get(`${API_URL}profiles/${currentUser.uid}/income.json`)
//     .success(cb);
//     console.log(currentUser.uid)
// },

// create(data, cb) {
//   $http
//     .post(currentUserRef, data)
//     .success(cb);
//     console.log("did anything happen with this? 3")
// },

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvb3ZlcnZpZXcvaW5jb21lLmZhY3RvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQ0osTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUVsQixPQUFPLENBQUMsZUFBZSxFQUFFLFVBQVUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUU7O0FBRTVHLE1BQUksR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNsRCxNQUFJLFFBQVEsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRW5DLE1BQUksY0FBYyxHQUFHLElBQUksUUFBUSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekcsTUFBSSxrQkFBa0IsR0FBRyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7O0FBRXpELFVBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQTs7QUFFckIsU0FBTyxFQWtDTixDQUFBO0NBQ0YsQ0FBQyxDQUFDIiwiZmlsZSI6InNyYy9hc3NldHMvb3ZlcnZpZXcvaW5jb21lLmZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyXG4gIC5tb2R1bGUoJ2JhbmtSb2xsJylcblxuICAuZmFjdG9yeSgnaW5jb21lRmFjdG9yeScsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkaHR0cCwgQVBJX1VSTCwgJGZpcmViYXNlQXJyYXksICRmaXJlYmFzZU9iamVjdCwgY3VycmVudFVzZXIpIHtcblxuICAgIHZhciByZWYgPSBuZXcgRmlyZWJhc2UoQVBJX1VSTCkuY2hpbGQoJ3Byb2ZpbGVzJyk7XG4gICAgdmFyIHByb2ZpbGVzID0gJGZpcmViYXNlQXJyYXkocmVmKTtcblxuICAgIHZhciBjdXJyZW50VXNlclJlZiA9IG5ldyBGaXJlYmFzZShBUElfVVJMICsgJ3Byb2ZpbGVzLycpLm9yZGVyQnlDaGlsZCgnaWQnKS5lcXVhbFRvKCRyb290U2NvcGUuYXV0aC51aWQpO1xuICAgIHZhciBjdXJyZW50VXNlclByb2ZpbGUgPSAkZmlyZWJhc2VPYmplY3QoY3VycmVudFVzZXJSZWYpO1xuXG4gICAgcHJvZmlsZXMuJGdldFJlY29yZCgpXG5cbiAgICByZXR1cm4ge1xuICAgICAgLy8gZ2V0T25lKGlkLCBjYikge1xuICAgICAgLy8gICAkaHR0cFxuICAgICAgLy8gICAgIC5nZXQoY3VycmVudFVzZXJSZWYpXG4gICAgICAvLyAgICAgLnN1Y2Nlc3MoY2IpO1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZGlkIGFueXRoaW5nIGhhcHBlbiB3aXRoIHRoaXM/IDFcIilcbiAgICAgIC8vIH0sXG5cbiAgICAgIC8vIGFsbEluY29tZShjYikge1xuICAgICAgLy8gICAkaHR0cFxuICAgICAgLy8gICAgIC5nZXQoJ2h0dHBzOi8vYmFua3JvbGwuZmlyZWJhc2Vpby5jb20vcHJvZmlsZXMvc2ltcGxlbG9naW4lM0E4NC9pbmNvbWUuanNvbicpXG4gICAgICAvLyAgICAgLy8gLmdldChgJHtBUElfVVJMfXByb2ZpbGVzLyR7Y3VycmVudFVzZXIudWlkfS9pbmNvbWUuanNvbmApXG4gICAgICAvLyAgICAgLnN1Y2Nlc3MoY2IpO1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyLnVpZClcbiAgICAgIC8vIH0sXG5cbiAgICAgIC8vIGNyZWF0ZShkYXRhLCBjYikge1xuICAgICAgLy8gICAkaHR0cFxuICAgICAgLy8gICAgIC5wb3N0KGN1cnJlbnRVc2VyUmVmLCBkYXRhKVxuICAgICAgLy8gICAgIC5zdWNjZXNzKGNiKTtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImRpZCBhbnl0aGluZyBoYXBwZW4gd2l0aCB0aGlzPyAzXCIpXG4gICAgICAvLyB9LFxuXG4gICAgICAvLyB1cGRhdGUoaWQsIGRhdGEsIGNiKSB7XG4gICAgICAvLyAgICRodHRwXG4gICAgICAvLyAgICAgLnB1dChgJHtBUElfVVJMfXByb2ZpbGVzLyR7YXV0aERhdGEudWlkfS5qc29uYCwgZGF0YSlcbiAgICAgIC8vICAgICAuc3VjY2VzcyhjYik7XG4gICAgICAvLyB9LFxuXG4gICAgICAvLyBkZXN0cm95KGlkLCBjYikge1xuICAgICAgLy8gICAkaHR0cFxuICAgICAgLy8gICAgIC5kZWxldGUoYCR7QVBJX1VSTH1wcm9maWxlcy8ke2F1dGhEYXRhLnVpZH0uanNvbmApXG4gICAgICAvLyAgICAgLnN1Y2Nlc3MoY2IpO1xuICAgICAgLy8gfVxuICAgIH1cbiAgfSk7XG4iXX0=
