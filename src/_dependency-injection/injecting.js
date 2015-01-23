(function(){
  'use strict';
  
  angular.module('app', ['sample'])
    .config(function(calendarNamesServiceProvider){
      calendarNamesServiceProvider.setLanguage('de');
  })
    .controller('CalendarCtrl', function($scope, calendarNamesService){
       $scope.today = calendarNamesService.day;
    });
  
  angular.module('sample',[])
    .provider('calendarNamesService', function() {
    
      var _day = 'Friday';
    
      this.setLanguage = function(lang){
        if( lang === 'de' )
        {
          _day = 'Freitag';
        }
      };
    
      this.$get = function() {
        return { day: _day };
      };
    
    })
    .factory('calendarNamesServiceFactory', function() {
    
      var _day = 'Saturday';
    
      if( window.navigator.language === 'de' ) {
        _day = 'Samstag';
      }
    
      return { day: _day };
    });
  
})();