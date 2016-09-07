define(["./services"], function (services) {
    "use strict";
    services.service('loginService', ['apiService', '$q', '$localStorage', '$rootScope',
        function (apiService, $q, $localStorage,$rootScope) {
        var service = this;

		//用户登录服务
        service.login = function(params) {
            return apiService.Post('/loginController/mobile_userLogin.do', params).then(function(responseData){
                if (responseData.status == "1") {
                    $localStorage.userId =  responseData.t.userId;
                }
                return responseData;
            });
        };
		//用户登出服务
        service.logout = function() {
            delete $localStorage.userId;
            $rootScope.$broadcast('unauthorized');
        };
		//判读是否为登录状态
        service.isLogin = function() {
            return $localStorage.userId !== undefined && $localStorage.userId !== '';
        };
		//获取当前登录用户的id
        service.getUserid = function() {
            return $localStorage.userId ;
        };
        
    }]);
});