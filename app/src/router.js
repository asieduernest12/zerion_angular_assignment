//app router
'use strict';

(()=>{//encapsulation wrapper
  angular.module('zerionApp')

  .config(['$urlRouterProvider','$stateProvider',routerConfig])

  ;

  function routerConfig($urlRouterProvider,$stateProvider){
    $stateProvider
    .state('tile_view',{
      'url':'/tile_view',
      'template': '<home-page-tile-cmp></home-page-tile-cmp>'
    })
    .state('table_view',{
      'url':'/table_view',
      'template': '<home-page-table-cmp></home-page-table-cmp>'
    })
    .state('details_page',{
      'url':'/:document_id/details',
      'template': '<document-detail-cmp></document-detail-cmp>'
    });

    $urlRouterProvider.otherwise('table_view')
  }
})();
