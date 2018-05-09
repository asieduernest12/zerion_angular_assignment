//controller for both table and tile_view
'use strict';

(()=>{
  angular.module('zerionApp')

  .controller('homePageTableController',['$scope','RecordService',homePageTableController]);

  function homePageTableController($scope,RecordService){
    var vm = $scope // vm is just a place holder synonymous to view_model

    vm.delete_multiple = delete_multiple;
    vm.delete_one = delete_one;


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

    function delete_multiple(){
      vm.records.forEach(function(record,index){
        console.log(record);
        if(record.hasOwnProperty('deletable') && record.deletable){
          RecordService.deleteRecord(record._id);
        }

        initializeRecords();
      });
    }


    function delete_one(record){
      console.log('attempting delete');
      RecordService.deleteRecord(record._id).then((response)=>{
        initializeRecords();
      },(err)=>{
        console.log(err);
      });
    }
  }
})();
