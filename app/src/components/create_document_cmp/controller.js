//create detail page controller
'use strict';

(()=>{
  angular.module('zerionApp')

  .controller('createDetailRecordController',['$scope','RecordService','$state','$stateParams',createDetailRecordController]);

  function createDetailRecordController($scope,RecordService,$state,$stateParams){
    var vm = $scope;
    vm.add_extra_img = add_extra_img;
    vm.remove_last_img = remove_last_img;
    vm.submit = submit;

    initialize();


    function initialize(){
      if ($stateParams.hasOwnProperty('record_id')){//true on details call
        RecordService.getRecord($stateParams.record_id).then((response)=>{
          vm.new_record = response;
        },(err)=>{
          console.log(err);
        });
      }else{
        //prepare to create new record
        vm.new_record = {
          "name":"",
          "description":"",
          "imgs": []
        };
        add_extra_img();

        console.log('ready to create new record');
      }
    }

    function add_extra_img(){
      // add empty {"url":""} to img[]
      vm.new_record.imgs.unshift({"url":""});
    }

    function remove_last_img(){
      vm.new_record.imgs.shift();
    }

    function submit(){
      console.log('attempting create');
      if($stateParams.hasOwnProperty('record_id')){
        //perform update since this is details of a record is being viewed
        //insert new record
        var record_update = {
          '_id': vm.new_record._id,
          'name':vm.new_record.name,
          'description': vm.new_record.description,
          'imgs':vm.new_record.imgs
        };

        RecordService.updateRecord(record_update).then((response)=>{
          // $state.go('records.table_view');
          window.history.back();
        },(err)=>{
          alert('Error occured, review the information provided and retry');
        });
      }else{

        RecordService.createRecord(vm.new_record).then((response)=>{
          // $state.go('records.table_view');
          window.history.back();
        },(err)=>{
          alert('Error occured, review the information provided and retry');
        });
      }
    }

  }
})();
