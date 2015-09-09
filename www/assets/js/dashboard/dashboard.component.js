angular.module('drn.dashboard', [])
  .directive('drnDashboard', function () {

    function drnDashboardVM () {

    }


    return {
      restrict     : 'E',
      scope        : {},
      controller   : drnDashboardVM,
      controllerAs : 'vm',
      templateUrl  : 'assets/js/dashboard/dashboard.component.html'
    }
  });