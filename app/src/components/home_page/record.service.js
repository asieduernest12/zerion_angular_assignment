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
      return Restangular.one('record',record_id);
    }

    function deleteRecord(record_id){
      return Restangular.remove('record',record_id);
    }

    function updateRecord(){

    }

    function createRecord(){

    }
  }
})();
