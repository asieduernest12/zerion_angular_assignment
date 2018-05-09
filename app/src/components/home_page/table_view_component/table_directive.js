// table directive
'use strict';

(()=>{
  angular.module('zerionApp')

  .directive('homePageTableCmp',['homePageTableTemplate',homePageTableCmp]);


  function homePageTableCmp(homePageTableTemplate){
    return {
      restrict: 'E',
      template: homePageTableTemplate,
      controller: 'homePageTableController'
    }
  }
})();
