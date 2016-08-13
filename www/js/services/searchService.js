/**
 * Created by camelot on 16/7/4.
 */

/* JavaScript content from scripts/console/controllers/loginCtrl.js in folder common */
define(["./services"], function (services) {
  "use strict";

    //注册服务(服务名,[依赖,回调])
  services.service('searchService', ['apiService', '$q', function (apiService, $q) {
      //返回公共API
      return ({
        //获得已关注  关注 列表
        mobile_mobileMarkList: mobile_mobileMarkList,
        //关注接口
        mobile_mobileMark:mobile_mobileMark
      });

      function mobile_mobileMarkList(params) {
        var request = apiService.Post('/loginController/mobile_mobileMarkList.do', params);
        return (request.then(apiService.handleSucess, apiService.handleError));
      }

      function mobile_mobileMark(params) {
        var request = apiService.Post('/loginController/mobile_mobileMark.do', params);
        return (request.then(apiService.handleSucess, apiService.handleError));
      }

    }])
});
