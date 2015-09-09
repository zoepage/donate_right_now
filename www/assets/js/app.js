angular.module('drn', [
  'hoodie',

  'drn.dashboard'
]).config(function (hoodieProvider) {
  hoodieProvider.url('/');
});