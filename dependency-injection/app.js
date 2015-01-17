(function(){

  angular.module('lean', ['services'])
    .config(function( /* Constant Services */ versionConstant,logFnConstant,logObjConstant){
      console.info('Configuring the lean app ...');
      logFnConstant('-- Timestamp ' + new Date());
      logObjConstant.log('-- Version: ' + versionConstant);
    })
    .run(function( /* Constant Services */ versionConstant,logFnConstant,logObjConstant,
                   /* Value Services */ versionValue,logFnValue,logObjValue,
                   /* Classic Service */ logService1, logService2,
                   /* Factored Services */ versionFactory, logFnFactory, logObjFactory1, logObjFactory2){
      console.info('Running the lean app ...');
      logFnConstant('-- Timestamp ' + new Date());
      logObjConstant.log('-- Version: ' + versionConstant);

      logFnValue('-- Timestamp ' + new Date());
      logObjValue.log('-- Version: ' + versionValue);

      logService1.log('-- Reporting the UA as well');
      logService2.log('-- Reporting the UA as well');

      logFnFactory('-- Factored:' + versionFactory);
      logObjFactory1.log('-- Factored with literal object');
      logObjFactory2.log('-- Factored with constructor');

    });

})();
