(function() {
    angular
    .module('entrees')
    .factory('EntreesFactory', EntreesFactory);

      EntreesFactory.$inject = ['$resource', 'API_URL'];

      function EntreesFactory($resource, API_URL) {
        return $resource(`${API_URL}entrees/:id`,
          {id: '@_id'},
          {update: {method: 'PUT'}} //Now calling update on the entree item will result in a PUT instead of a POST.
        );
      }
})();
