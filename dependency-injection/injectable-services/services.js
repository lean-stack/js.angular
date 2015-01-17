(function(){

  var serviceModule = angular.module('services',[]);

  serviceModule

    .constant('versionConstant', '[Constant 1.0 - not decoratable]')
    .value('versionValue','[Value 1.0 - decoratable]')

    .constant('logFnConstant',function(msg){console.log('[Constant Log Fn - not decoratable] ' + msg)})
    .value('logFnValue',function(msg){console.log('[Value Log Fn - decoratable] ' + msg)})

    .constant('logObjConstant',
      {
        log: function(msg){console.log('[Constant Log Obj - not decoratable] ' + msg)}
      })
    .value('logObjValue',
      {
        log: function(msg){console.log('[Value Log Obj - decoratable] ' + msg)}
      })

    .service('logService1',function($window,versionValue,versionConstant){
      // Constructor
      var browser = $window.navigator.userAgent;

      this.log = function(msg) {
        console.log('[Service Log - decoratable][' + browser + ']' + msg)
      }

      this.version1 = versionValue;
      this.version2 = versionConstant;
    })
    // Klasse siehe unten
    .service('logService2', Logger)


    .factory('versionFactory', function() {
      /* factory code */
      console.info('Factoring the version');
      return '[Factory 1.0]'
    })
    .factory('logFnFactory', function() {
      /* factory code */
      console.info('Factoring the log fn');
      return function(msg){console.log('[Factory Log Fn - decoratable] ' + msg)}
    })
    .factory('logObjFactory1', function () {
      /* factory code */
      console.info('Factoring the log obj');
      return {
        log: function(msg){console.log('[Value Log Obj - decoratable] ' + msg)}
      }
    })
    .factory('logObjFactory2', function ($window) {
      /* factory code */
      console.info('Factoring the Logger obj');
      return new Logger($window)
    })

    .provider('versionVal', {
      version: '0.0',
      setVersion: function(v) {this.version = v},
      $get: function() {return this.version}
    });

  // Logger-Klasse
  function Logger ($window) {
    var browser = $window.navigator.userAgent;

    this.log = function(msg) {
      console.log('[Service Log - decoratable][' + browser + ']' + msg)
    }
  }
})();
