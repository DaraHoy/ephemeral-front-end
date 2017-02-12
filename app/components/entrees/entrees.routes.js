(function(){
  angular
    .module('entrees')
    .config(Routes);

    function Routes($stateProvider){
      $stateProvider
        .state('entreesIndex', {
          url: '/entrees',
          templateUrl : 'partials/entreesIndex.html',
          controller  : 'entreesIndexCtrl',
          controllerAs: 'vm'
        });
    }
})();
