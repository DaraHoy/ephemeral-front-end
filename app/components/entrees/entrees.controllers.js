(function() {
    angular
      .module('entrees')
      .controller('entreesIndexCtrl', entreesIndexCtrl);

      function entreesIndexCtrl($scope, EntreesFactory){
          $scope.entrees = EntreesFactory.query();
        }


})();
