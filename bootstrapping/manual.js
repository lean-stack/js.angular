(function(){
  'use strict';

  // Define application
  var app = angular.module('lean', []);

  // Define Controller
  app.controller('HomeCtrl', function($scope){

    $scope.VERSION = angular.version.full;

  });

  // Bootstrap
  console.log('Bootstrapping ...');
  console.log('  AngularJS: ' + angular.version.full);

  if( window.jQuery ) {

    console.log('  jQuery: ' + jQuery.fn.jquery);

    var $appRootElt = angular.element('#appRoot');
    $appRootElt.ready(function(){
      angular.bootstrap($appRootElt,['lean']);
    });

  } else {

    var appRootElt = document.getElementById('appRoot');  // jqLite not capable of selector strings
    angular.element(appRootElt).ready(function(){
      angular.bootstrap(appRootElt,['lean']);
    });

  }


})();
