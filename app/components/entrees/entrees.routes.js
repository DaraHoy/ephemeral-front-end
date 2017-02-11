(function(){
  angular
    .module('entrees')
    .config(Routes);

    Routes.$inject = ['$stateProvider'];

    function Routes($stateProvider){
      $stateProvider
        .state('entreesIndex', {
          url: '/entrees',
          templateUrl : 'partials/entreesIndex.html',
          controller  : 'entreesIndexCtrl'
        });
    }
})();
