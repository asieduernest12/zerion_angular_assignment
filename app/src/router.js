//app router
'use strict';

(()=>{//encapsulation wrapper
  angular.module('zerionApp')

  .config(['$urlRouterProvider','$stateProvider',routerConfig])

  ;

  function routerConfig($urlRouterProvider,$stateProvider){
    $stateProvider
    .state('records',{
      "url": "/records",
      "template": "<records-home-view-cmp></records-home-view-cmp>"
    })
    .state('records.tile_view',{
      'url':'/tile_view',
      'template': '<home-page-tile-cmp></home-page-tile-cmp>'
    })
    .state('records.table_view',{
      'url':'/table_view',
      'template': '<home-page-table-cmp></home-page-table-cmp>'
    })
    .state('records.create_page',{
      'url':'/create',
      'template': '<create-detail-record-cmp></create-detail-record-cmp>'
    })
    .state('records.details_page',{
      'url':'/:record_id/detail',
      'template': '<create-detail-record-cmp></create-detail-record-cmp>'
    });

    $urlRouterProvider.otherwise('records');
  }
})();
