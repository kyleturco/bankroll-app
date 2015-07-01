angular
  .module('bankRoll')

  .factory('incomeFactory', function ($rootScope, $http, API_URL, $firebaseArray, $firebaseObject) {

    var ref = new Firebase(API_URL).child('profiles');
    var profiles = $firebaseArray(ref);

    var currentUserRef = new Firebase(API_URL + 'profiles/').orderByChild('id').equalTo($rootScope.auth.uid);
    var currentUserProfile = $firebaseObject(currentUserRef);

    profiles.$getRecord()

    return {
      // getOne(id, cb) {
      //   $http
      //     .get(`${API_URL}profiles/${authData.uid}.json`)
      //     .success(cb);
      // },

      getAll(cb) {
        $http
          .get(incomeUrl(), data)
          .success(cb);
      },

      create(data, cb) {
        $http
          .post(incomeUrl(), data)
          .success(cb);
      },

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
