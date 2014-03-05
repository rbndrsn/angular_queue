'use strict';

angular.module('queueApp')
  .controller('guestCtrl', function ($scope) {
    $scope.guests = [
      {name:'Rob', done:true},
      {name:'Danielle', done:false}
    ];

    $scope.addGuest = function() {
      $scope.guests.push({name:$scope.guestName, done:false});
      $scope.guestName = '';
    };

    $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.guests, function(guest) {
      count += guest.done ? 0 : 1;
    });
    return count;
    };

    $scope.archive = function() {
    var oldGuests = $scope.guests;
    $scope.guests = [];
    angular.forEach(oldGuests, function(guest) {
      if (!guest.done) $scope.guests.push(guest);
    });
  };
});
