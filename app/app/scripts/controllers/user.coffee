'use strict'

angular.module('queueApp')
  .controller 'UserCtrl', ($scope) ->
    $scope.guests = [
      {name:'Rob'},
      {name:'Danielle'}
    ]
