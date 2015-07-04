angular
  .module('bankRoll')

  .factory('expenseFactory', function ($rootScope, $http, API_URL, $firebaseArray, $firebaseObject, currentUser) {

    var ref = new Firebase(API_URL).child('profiles');
    var profiles = $firebaseArray(ref);

    var currentUserRef = new Firebase(API_URL + 'profiles/').orderByChild('id').equalTo($rootScope.auth.uid);
    var currentUserProfile = $firebaseObject(currentUserRef);

    profiles.$getRecord()

    return {
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
    }
  });
