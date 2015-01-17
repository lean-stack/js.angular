(function(){
  'use strict';
  
  // Define application
  var app = angular.module('lean', []);
  
  // Define Controller
  app.controller('HomeCtrl', function($scope){
    
    $scope.VERSION = angular.version.full;
    
  });
})();