// service to manipulate and load data
'use strict';

(()=>{
  angular.module('zerionApp')

  .service('RecordService',['Restangular',RecordService]);

  function RecordService(Restangular){

    this.getAllRecords = getAllRecords;
    this.getRecord = getRecord;
    this.deleteRecord = deleteRecord;
    this.updateRecord = updateRecord;
    this.createRecord = createRecord;

    function getAllRecords(){
      return Restangular.all('records').getList();
    }

    function getRecord(record_id){
      return Restangular.one('records',record_id).get();
    }

    function deleteRecord(record_id){
      return Restangular.one('records',record_id).remove();
    }

    function updateRecord(record){
      console.log('performing update');
      return Restangular.one('records',record._id).customPUT(record);
    }

    function createRecord(record){
      console.log('performing create');
      return Restangular.all('records').post(record);
    }
  }
})();
