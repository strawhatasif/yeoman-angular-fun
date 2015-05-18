'use strict';

/**
 * @ngdoc function
 * @name yeomanangularfunApp.controller:AwesomeCtrl
 * @description
 * # AwesomeCtrl
 * Controller of the yeomanangularfunApp
 */
angular.module('yeomanangularfunApp')
  .controller('AwesomeCtrl', function ($scope) 
 {
    $scope.awesomeNumber = '2.4';
    $scope.firstName;
    $scope.myFunction = 
        function () 
        {
        window.alert('Hi, welcome to Angular land!');
        };
   
    $scope.animals = [
        {
            id: 0,
            name: 'Cat',
            nickname: 'Kitty'
        },
        {
            id: 1,
            name: 'Dog',
            nickname: 'Doggie'
        },
        {
            id: 2,
            name: 'Lion',
            nickname: 'King of the Jungle'
        },
        {
            id: 3,
            name: 'Bear',
            nickname: 'Smokey the Bear'
            
        }
    ];
    
  });
