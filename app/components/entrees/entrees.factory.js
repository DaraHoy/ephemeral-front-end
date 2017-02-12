(function() {
    angular
    .module('entrees')
    .factory('EntreesFactory', EntreesFactory);

    EntreesFactory.$inject = ['$resource', 'API_URL'];

    function EntreesFactory($resource, API_URL) {
      return $resource(`${API_URL}/entrees/:id`);
    }
})();
