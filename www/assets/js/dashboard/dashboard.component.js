angular.module('drn.dashboard', ['hoodie'])
  .directive('drnDashboard', function () {

    function drnDashboardVM ($scope, hoodieArray, hoodieAccount) {

      var mock = {
        name       : 'aufräumen',
        due        : 'Montag, 19:00',
        quantity   : 2,
        location   : 'DKH',
        urgent     : 5,
        category   : 'cat 1',
        by         : hoodieAccount.username,
        created_on : new Date(),
        add_info   : 'Test Add Info'
      };

      var emptyItem = {urgent:1};

      $scope.items = [];
      $scope.newItem = angular.copy(emptyItem);

      $scope.remove = function (item, index) {
        $scope.items.splice(index, 1);
      };

      $scope.add = function (item) {
        $scope.items.push(item);
        $scope.newItem = angular.copy(emptyItem);
      };


      hoodieArray.bind($scope, 'items', 'item');


      $scope.items.push(mock);
    }


    return {
      restrict    : 'E',
      scope       : {},
      controller  : drnDashboardVM,
      //controllerAs : 'vm', // Hoodie Angular Plugin crash
      templateUrl : 'assets/js/dashboard/dashboard.component.html'
    }
  });