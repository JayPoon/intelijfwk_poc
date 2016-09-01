define(["./services"], function (services) {
  "use strict";
    //注册服务(服务名,[依赖,回调])
  services.service('registerService',  function (apiService,$http, $q) {
        var service = this;

        service.register = function(params){
            return apiService.Post('/loginController/mobile_userReg.do', params);
        };
    })
});



