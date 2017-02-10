(function() {
    angular
    .module('ephemeralApp', [
      'ngResource',
      'ui.router',
    ])
    .constant('API_URL', 'https://localhost:8080/api');

})();
