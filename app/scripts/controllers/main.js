'use strict';

/**
 * @ngdoc function
 * @name yeomanangularfunApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanangularfunApp
 */
angular.module('yeomanangularfunApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
