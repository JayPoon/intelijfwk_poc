/* JavaScript content from scripts/console/controllers/loginCtrl.js in folder common */
define(["./../controllers/controllers"], function (controllers) {
    "use strict";

    controllers.controller("nosearchCtrl", ["$scope", "$state", "$localStorage", "$timeout", "$stateParams","searchService",
        function ($scope, $state, $localStorage,$timeout, $stateParams,searchService) {
            $scope.imgpath=$config.img_path;
            $scope.searchNames = $stateParams.searchName;
            $scope.searchs = {};
            //进入这个页面是
            $scope.load = function () {
                var params = {
                    "markType": "2",
                    "userId": window.localStorage.getItem("userId")
                };
                //调用方法
                searchService.mobile_mobileMarkList(params).then(function (data) {

                    // //真实数据时直接删除for 循环
                    // for (var i = 0; i < data.t.length; i++) {
                    //     data.t[i].sys_pic = "img/mm.jpg";
                    // }
                    //
                    $scope.searchs = data.t;
                    //如果页面需要重新加载 数据,那么必须执行刷新方法 $scope.$apply();
                    // $scope.$apply();
                }, function (errorMessage) {
                    console.log(errorMessage);
                });
                
            }

            //初始化 就执行获取数据
            $scope.load();

            $scope.care = function (title) {
                // http://localhost:8080/clt/loginController/mobile_mobileMark.do?systemId=1&userId=2
                var params = {
                    "systemId": title,
                    "userId":window.localStorage.getItem("userId")
                };
                //调用方法
                searchService.mobile_mobileMark(params).then(function (data) {
                    //如果关注成功 就去已关注界面
                    if (data.status == "1") {
                        $state.go("search");
                    }
                }, function (errorMessage) {
                    console.log(errorMessage);
                });

            }

            $scope.backto = function () {
                $state.go("login");
            }

        }])
});
