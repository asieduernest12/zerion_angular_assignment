//config for zerionApp
'use strict';

(()=>{//encapsulation wrapper
  angular.module('zerionApp')

  .config(['RestangularProvider','zerion_ACCESS_TOKEN',zerionConfig]);

  function zerionConfig(RestangularProvider,zerion_ACCESS_TOKEN){
    // RestangularProvider.setBaseUrl('https://alpha-dataflownode.zerionsoftware.com/code_assignment/')

    RestangularProvider
    .setBaseUrl("https://alpha-dataflownode.zerionsoftware.com/code_assignment/")

    .addFullRequestInterceptor(requestInterceptor);

    function requestInterceptor(element, operation, route, url, headers, params, httpConfig) {
      
      var allHeaders = angular.extend(headers, {
        "content-type": "application/json",
        "Authorization": "Bearer " + zerion_ACCESS_TOKEN
      });

      return {
        headers: allHeaders
      }
    }
  }
})();
