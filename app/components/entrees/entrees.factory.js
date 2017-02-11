(function(){
    angular
    .module('entrees')
    .factory('EntreesFactory', function ($resource) {
      //still need to setup, hasnt made a call yet
      return $resource("http://localhost:8080/api/entrees");
});
})();
