//controller for both table and tile_view
'use strict';

(()=>{
  angular.module('zerionApp')

  .controller('homePageTableController',['$scope','RecordService',homePageTableController]);

  function homePageTableController($scope,RecordService){
    var vm = $scope // vm is just a place holder synonymous to view_model

    vm.marked_for_deletion_counter = 0;
    vm.delete_multiple = delete_multiple;
    vm.delete_one = delete_one;
    vm.count_records_marked_for_deletion = count_records_marked_for_deletion;



    initializeRecords();

    function initializeRecords(){
      RecordService.getAllRecords().then(function(response){
        vm.records = response
        vm.marked_for_deletion_counter = 0;
        count_records_marked_for_deletion();
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
      console.log('attempting delete using delete_one()');
      RecordService.deleteRecord(record._id).then((response)=>{
        alert('Delete operation successful');
        initializeRecords();
      },(err)=>{
        console.log(err);
      });
    }

    /**
    * [count_records_marked_for_deletion count records and store number of records marked for deletion in marked_for_deletion_counter]
    * marked_for_deletion_counter == 0 means false therefore delete_button must be disabled
    * @method count_records_marked_for_deletion
    * @return {[type]}                          [description]
    */
    function count_records_marked_for_deletion(){
      vm.marked_for_deletion_counter = 0;
      vm.records.forEach(function(record,index){
        console.log(record);
        if(record.hasOwnProperty('deletable') && record.deletable){
          vm.marked_for_deletion_counter ++;
        }
      });
      console.log('marked_for_deletion_counter updated with count: ',vm.marked_for_deletion_counter);
    }



  }
})();
