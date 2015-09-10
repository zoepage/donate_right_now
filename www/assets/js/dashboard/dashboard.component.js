angular.module('drn.dashboard', ['hoodie'])
  .directive('drnDashboard', function () {

    function drnDashboardVM ($scope, $q) {

      var emptyItem = {
        urgent : 1,
        by     : hoodie.username
      };

      $scope.items = [];
      $scope.newItem = angular.copy(emptyItem);


      function init () {
        $q.when(hoodie.store.findAll('item'))
          .then(function (items) {
            $scope.items = items;
          });
      }

      $scope.remove = function (item, index) {
        hoodie.store.find('item', item.id).unpublish();
        hoodie.store.remove('item', item.id)//.unpublish();
        $scope.items.splice(index, 1);
      };

      $scope.add = function (item) {
        $scope.items.push(item);
        $scope.newItem = angular.copy(emptyItem);
        hoodie.store.add('item', item).publish();
      };


      $scope.edit = function (item) {
        $scope.editMode = false;
        hoodie.store.update('item', item.id, item).publish();
      };


      init();
    }


    return {
      restrict    : 'E',
      scope       : {},
      controller  : drnDashboardVM,
      //controllerAs : 'vm', // Hoodie Angular Plugin crash
      templateUrl : 'assets/js/dashboard/dashboard.component.html'
    }
  });