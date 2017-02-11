(function(){
  angular
    .module('entrees')
    .config(Routes);

    function Routes($stateProvider){
      $stateProvider
        .state('entreesIndex', {
          url: '/entrees',
          templateUrl : './entreesIndex.html',
          controller  : 'entreesIndexCtrl'
        });
    }
})();
