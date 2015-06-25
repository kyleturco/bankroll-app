angular
  .module('bankRoll')

  .factory('incomeFactory', function ($rootScope, $http, API_URL) {

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
