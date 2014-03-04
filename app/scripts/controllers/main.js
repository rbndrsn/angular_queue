'use strict';

angular.module('queueApp')
  .controller('MainCtrl', function ($scope) {
    $scope.guests = [
      {name:'Rob'},
      {name:'Danielle'}
    ];
  });
