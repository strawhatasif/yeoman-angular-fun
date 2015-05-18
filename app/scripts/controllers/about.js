'use strict';

/**
 * @ngdoc function
 * @name yeomanangularfunApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanangularfunApp
 */
angular.module('yeomanangularfunApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
