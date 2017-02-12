(function() {
    angular
      .module('entrees')
      .controller('entreesIndexCtrl', entreesIndexCtrl);

      entreesIndexCtrl.$inject = ['$scope','EntreesFactory'];

      function entreesIndexCtrl($scope, EntreesFactory){
          $scope.entrees = EntreesFactory.query();
        }

})();
