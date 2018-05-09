//directive for create record and details page
'use strict';

(()=>{
  angular.module('zerionApp')

  .directive('createDetailRecordCmp',['createDetailRecordTemplate',createDetailRecordCmp]);

  function createDetailRecordCmp(createDetailRecordTemplate){
    return {
      restrict: 'E',
      template: createDetailRecordTemplate,
      controller: 'createDetailRecordController'
    }
  }
})();
