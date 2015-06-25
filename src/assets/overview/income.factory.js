angular
  .module('bankRoll')

  .factory('Income', function ($http, API_URL) {
    return {
      getOne(id, cb) {
        $http
          .get(`${API_URL}profiles/${authData.uid}.json`)
          .success(cb);
      },

      getAll(cb) {
        $http
          .get(`${API_URL}profiles/${authData.uid}.json`)
          .success(cb);
      },

      create(data, cb) {
        $http
          .post(`${API_URL}profiles/${authData.uid}/income`, data)
          .success(cb);
      },

      update(id, data, cb) {
        $http
          .put(`${API_URL}profiles/${authData.uid}.json`, data)
          .success(cb);
      },

      destroy(id, cb) {
        $http
          .delete(`${API_URL}profiles/${authData.uid}.json`)
          .success(cb);
      }
    }
  });
