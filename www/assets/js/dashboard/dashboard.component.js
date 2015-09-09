angular.module('drn.dashboard', ['hoodie'])
  .directive('drnDashboard', function () {

    function drnDashboardVM ($scope, hoodieArray, hoodieAccount) {

      var emptyItem = {urgent:1};

      $scope.items = [];
      $scope.newItem = angular.copy(emptyItem);

      $scope.remove = function (item, index) {
        $scope.items.splice(index, 1);
        hoodie.store.findAll('item');
      };

      $scope.add = function (item) {
        $scope.items.push(item);
        $scope.newItem = angular.copy(emptyItem);
      };


      $scope.edit = function (item) {
        $scope.editMode = false;
      };

      hoodieArray.bind($scope, 'items', 'item');
      //hoodie.store.findAll('item').publish();
    }


    return {
      restrict    : 'E',
      scope       : {},
      controller  : drnDashboardVM,
      //controllerAs : 'vm', // Hoodie Angular Plugin crash
      templateUrl : 'assets/js/dashboard/dashboard.component.html'
    }
  });