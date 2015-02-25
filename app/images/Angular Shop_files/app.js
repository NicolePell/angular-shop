var addressBookApp = angular.module('addressBookApp', ['ngRoute', 'ngMessages'])

addressBookApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/list.html',
      controller: 'listContactsCtrl'
    })
    .when('/new', {
      templateUrl: 'views/new.html',
      controller: 'newContactCtrl'
    })
    .when('/edit/:id', {
      templateUrl: 'views/edit.html',
      controller: 'editContactCtrl'
    });
}]);
