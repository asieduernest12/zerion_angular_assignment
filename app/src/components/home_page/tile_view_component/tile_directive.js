//tile directive
'use strict';

(()=>{
  angular.module('zerionApp')

  .directive('homePageTileCmp',['homePageTileTemplate',homePageTileCmp]);

  function homePageTileCmp(homePageTileTemplate){
    return {
      restrict: 'E',
      template: homePageTileTemplate,
      controller: 'homePageTableController',
      replace: true
    };
  }
})();
