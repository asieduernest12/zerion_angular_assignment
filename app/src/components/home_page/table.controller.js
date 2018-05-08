//controller for both table view
'use strict';

(()=>{
  angular.module('zerionApp')

  .controller('homePageTableController',['$scope','RecordService',homePageTableController]);

  function homePageTableController($scope,RecordService){
    var vm = $scope // vm is just a place holder synonymous to view_model

    initializeRecords();


    function initializeRecords(){
      RecordService.getAllRecords().then(function(response){
        vm.records = response
        console.log(response);
      },function(err){
        if (err){
          console.log(err);
        }
      });
    }
  }
})();
