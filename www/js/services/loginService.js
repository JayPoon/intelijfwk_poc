/**
 * Created by jack on 2016/7/3.
 */

/* JavaScript content from scripts/console/controllers/loginCtrl.js in folder common */
define(["./services"], function (services) {
    "use strict";
    //注册服务(服务名,[依赖,回调])
    services.service('loginService', ['apiService', '$q', function (apiService, $q) {
        //返回公共API
        return ({
            //获得用户信息
            getUserLogin: getUserLogin
        });
        function getUserLogin(params) {
            var request = apiService.Post('/loginController/mobile_userLogin.do', params);
            return (request.then(apiService.handleSucess, apiService.handleError));
        }
    }])
});



