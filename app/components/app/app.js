(function() {
    angular
    .module('ephemeralApp', [
      'ngResource',
      'ngAnimate',
      'ui.router',
      'entrees'
    ])
    .constant('API_URL', 'https://localhost:8080/api');

})();
