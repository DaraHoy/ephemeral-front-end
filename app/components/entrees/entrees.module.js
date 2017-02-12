(function() {
  angular
    .module('entrees', [
      'ngResource',
      'ui.router'
    ])
    .constant('API_URL', 'http://localhost:8080/api/')
})();
