'use strict';

angular.module('bankRoll').factory('incomeFactory', function ($rootScope, $http, API_URL, $firebaseArray, $firebaseObject, currentUser) {

  var ref = new Firebase(API_URL).child('profiles');
  var profiles = $firebaseArray(ref);

  var currentUserRef = new Firebase(API_URL + 'profiles/').orderByChild('id').equalTo($rootScope.auth.uid);
  var currentUserProfile = $firebaseObject(currentUserRef);

  profiles.$getRecord();

  return {
    // getOne(id, cb) {
    //   $http
    //     .get(currentUserRef)
    //     .success(cb);
    //     console.log("did anything happen with this? 1")
    // },

    allIncome: function allIncome(cb) {
      $http.get('https://bankroll.firebaseio.com/profiles/simplelogin%3A84/income.json')
      // .get(`${API_URL}profiles/${currentUser.uid}/income.json`)
      .success(cb);
      console.log(currentUser.uid);
    }

  };
});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvb3ZlcnZpZXcvaW5jb21lLmZhY3RvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQ0osTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUVsQixPQUFPLENBQUMsZUFBZSxFQUFFLFVBQVUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUU7O0FBRTVHLE1BQUksR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNsRCxNQUFJLFFBQVEsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRW5DLE1BQUksY0FBYyxHQUFHLElBQUksUUFBUSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekcsTUFBSSxrQkFBa0IsR0FBRyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7O0FBRXpELFVBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQTs7QUFFckIsU0FBTzs7Ozs7Ozs7QUFRTCxhQUFTLEVBQUEsbUJBQUMsRUFBRSxFQUFFO0FBQ1osV0FBSyxDQUNGLEdBQUcsQ0FBQyx1RUFBdUUsQ0FBQzs7T0FFNUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2IsYUFBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUE7S0FDL0I7O0dBb0JGLENBQUE7Q0FDRixDQUFDLENBQUMiLCJmaWxlIjoic3JjL2Fzc2V0cy9vdmVydmlldy9pbmNvbWUuZmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXJcbiAgLm1vZHVsZSgnYmFua1JvbGwnKVxuXG4gIC5mYWN0b3J5KCdpbmNvbWVGYWN0b3J5JywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRodHRwLCBBUElfVVJMLCAkZmlyZWJhc2VBcnJheSwgJGZpcmViYXNlT2JqZWN0LCBjdXJyZW50VXNlcikge1xuXG4gICAgdmFyIHJlZiA9IG5ldyBGaXJlYmFzZShBUElfVVJMKS5jaGlsZCgncHJvZmlsZXMnKTtcbiAgICB2YXIgcHJvZmlsZXMgPSAkZmlyZWJhc2VBcnJheShyZWYpO1xuXG4gICAgdmFyIGN1cnJlbnRVc2VyUmVmID0gbmV3IEZpcmViYXNlKEFQSV9VUkwgKyAncHJvZmlsZXMvJykub3JkZXJCeUNoaWxkKCdpZCcpLmVxdWFsVG8oJHJvb3RTY29wZS5hdXRoLnVpZCk7XG4gICAgdmFyIGN1cnJlbnRVc2VyUHJvZmlsZSA9ICRmaXJlYmFzZU9iamVjdChjdXJyZW50VXNlclJlZik7XG5cbiAgICBwcm9maWxlcy4kZ2V0UmVjb3JkKClcblxuICAgIHJldHVybiB7XG4gICAgICAvLyBnZXRPbmUoaWQsIGNiKSB7XG4gICAgICAvLyAgICRodHRwXG4gICAgICAvLyAgICAgLmdldChjdXJyZW50VXNlclJlZilcbiAgICAgIC8vICAgICAuc3VjY2VzcyhjYik7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coXCJkaWQgYW55dGhpbmcgaGFwcGVuIHdpdGggdGhpcz8gMVwiKVxuICAgICAgLy8gfSxcblxuICAgICAgYWxsSW5jb21lKGNiKSB7XG4gICAgICAgICRodHRwXG4gICAgICAgICAgLmdldCgnaHR0cHM6Ly9iYW5rcm9sbC5maXJlYmFzZWlvLmNvbS9wcm9maWxlcy9zaW1wbGVsb2dpbiUzQTg0L2luY29tZS5qc29uJylcbiAgICAgICAgICAvLyAuZ2V0KGAke0FQSV9VUkx9cHJvZmlsZXMvJHtjdXJyZW50VXNlci51aWR9L2luY29tZS5qc29uYClcbiAgICAgICAgICAuc3VjY2VzcyhjYik7XG4gICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFVzZXIudWlkKVxuICAgICAgfSxcblxuICAgICAgLy8gY3JlYXRlKGRhdGEsIGNiKSB7XG4gICAgICAvLyAgICRodHRwXG4gICAgICAvLyAgICAgLnBvc3QoY3VycmVudFVzZXJSZWYsIGRhdGEpXG4gICAgICAvLyAgICAgLnN1Y2Nlc3MoY2IpO1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZGlkIGFueXRoaW5nIGhhcHBlbiB3aXRoIHRoaXM/IDNcIilcbiAgICAgIC8vIH0sXG5cbiAgICAgIC8vIHVwZGF0ZShpZCwgZGF0YSwgY2IpIHtcbiAgICAgIC8vICAgJGh0dHBcbiAgICAgIC8vICAgICAucHV0KGAke0FQSV9VUkx9cHJvZmlsZXMvJHthdXRoRGF0YS51aWR9Lmpzb25gLCBkYXRhKVxuICAgICAgLy8gICAgIC5zdWNjZXNzKGNiKTtcbiAgICAgIC8vIH0sXG5cbiAgICAgIC8vIGRlc3Ryb3koaWQsIGNiKSB7XG4gICAgICAvLyAgICRodHRwXG4gICAgICAvLyAgICAgLmRlbGV0ZShgJHtBUElfVVJMfXByb2ZpbGVzLyR7YXV0aERhdGEudWlkfS5qc29uYClcbiAgICAgIC8vICAgICAuc3VjY2VzcyhjYik7XG4gICAgICAvLyB9XG4gICAgfVxuICB9KTtcbiJdfQ==
