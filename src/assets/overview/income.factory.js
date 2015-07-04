angular
  .module('bankRoll')

  .factory('financeFactory', function ($rootScope, $http, API_URL, $firebaseArray, $firebaseObject, currentUser) {

    var ref = new Firebase(API_URL).child('profiles');
    var profiles = $firebaseArray(ref);

    var currentUserRef = new Firebase(API_URL + 'profiles/').orderByChild('id').equalTo($rootScope.auth.uid);
    var currentUserProfile = $firebaseObject(currentUserRef);

    profiles.$getRecord()

    return {}
  });
