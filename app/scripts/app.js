'use strict';

/**
 * @ngdoc overview
 * @name yeomanangularfunApp
 * @description
 * # yeomanangularfunApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanangularfunApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
     .when('/awesome', {
        templateUrl: 'views/awesome.html',
        controller: 'AwesomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
