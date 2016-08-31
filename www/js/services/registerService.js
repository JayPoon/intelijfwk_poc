/**
 * Created by camelot on 16/7/4.
 */

/* JavaScript content from scripts/console/controllers/loginCtrl.js in folder common */
define(["./services"], function (services) {
  "use strict";
    //注册服务(服务名,[依赖,回调])
  services.service('registerService',  function (apiService,$http, $q,Backand) {
      // function setRegister(params) {
      //   var request = apiService.Post('/loginController/mobile_userReg.do', params);
      //   return (request.then(apiService.handleSucess, apiService.handleError));
      // }

      // return ({
      //   setRegister:setRegister
       
      // });
      var service = this,
          baseUrl = '/1/objects/',
          objectName = 'appeaser/';

      function getUrl() {
          return Backand.getApiUrl() + baseUrl + objectName;
      }

      function getUrlForId(id) {
          return getUrl() + id;
      }

      service.register = function(object){
          return $http.post(getUrl(), object);
      }

    })
});



