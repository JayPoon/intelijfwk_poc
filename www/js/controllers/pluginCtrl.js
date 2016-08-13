/* JavaScript content from scripts/console/controllers/loginCtrl.js in folder common */
define([ "./controllers" ], function (controllers) {
    "use strict";

    controllers.controller("pluginCtrl", [ "$scope", "$state", "$localStorage","$stateParams","$timeout","cordovaService",
        function ($scope, $state, $localStorage,$stateParams,$timeout,cordovaService) {
            //var exec = cordova.require('cordova/exec');
            var exec = cordovaService.exec();
            // $scope.items = [];
            // var base = 0;
            // $scope.load_more = function(){
            //     $timeout(function(){
            //         for(var i=0;i<10;i++,base++)
            //             $scope.items.push(["item ",base].join(""));
            //         $scope.$broadcast("scroll.infiniteScrollComplete");
            //     },500);
            // };

            $scope.backto=function () {
                $state.go("login" );
            }



            //支付宝支付
            $scope.aliPay=function () {
                exec(aliPayMessageSuccess, aliPayMessageError, "PaymentPlugin", "aliPay",
                    ["0.01","508608f84","无限极支付","芒果捞"])
            };

            function aliPayMessageSuccess(result){
                alert("你成功连接IOS 插件 这是aliPay返回数据："+result);
            }
            function aliPayMessageError(result){
                alert("失败了:(  " + result);

            }

            //微信支付
            $scope.wxPay=function () {
                exec(wxPayMessageSuccess, wxPayMessageError, "PaymentPlugin", "wxPay",
                    ["12","K90800066489","无限极支付"])
            };

            function wxPayMessageSuccess(result){
                alert("你成功连接IOS 插件 这是wxPay返回数据："+result);
            }
            function wxPayMessageError(result){
                alert("失败了:(  " + result);
            }




            //自定义分享
            $scope.shareclick=function () {
                exec(customShareMessageSuccess, customShareMessageError, "CustomSharePlugin", "customShare", ["Hello World"])
            };

            function customShareMessageSuccess(result){
                alert("你成功连接IOS 插件 shareclick："+result);
            }

            function customShareMessageError(result){
                alert("失败了:(  " + result);
            }



            //二维码/条形码扫描
            $scope.scanclick=function () {
                exec(scanMessageSuccess, scanMessageError, "ScanPlugin", "scan", [])
            };

            function scanMessageSuccess(result){
                alert("你成功连接IOS 插件 这是scanclick返回数据："+result);
            }
            function scanMessageError(result){
                alert("失败了:(  " + result);
            }




            //检查网络状态和获取设备信息
            $scope.checkwificlick=function () {
                exec(checkWifiMessageSuccess, checkWifiMessageError, "CheckWifiStatusPlugin", "checkWifiStatus", ["1","2"])
            };

            function checkWifiMessageSuccess(result){
                alert("你成功连接IOS 插件 checkwificlick："+result);
            }
            function checkWifiMessageError(result){
                alert("失败了:(  " + result);
            }



            //摇一摇
            $scope.shakeclick=function () {
                exec(shakeMessageSuccess, shakeMessageError, "ShakePlugin", "shake", ["shake"])
            };

            function shakeMessageSuccess(result){
                alert("你成功连接IOS 插件 shakeclick："+result);
            }
            function shakeMessageError(result){
                alert("失败了:(  " + result);
            }



            //图片水印和签名
            $scope.waterclick=function () {
                exec(waterMarkMessageSuccess, waterMarkMessageError, "WatermarkPhotoPlugin", "waterMarkPhoto", ["图片水印"])
            };

            function waterMarkMessageSuccess(result){
                alert("你成功连接IOS 插件 waterclick："+result);

            }
            function waterMarkMessageError(result){
                alert("失败了:(  " + result);
            }




            //拍照编辑和选择照片
            $scope.cameraclick=function () {
                exec(photoMessageSuccess, photoMessageError, "PhotoWitnSelectPlugin", "photoWitnSelect", ["photo"])
            };

            function photoMessageSuccess(result){
                alert("你成功连接IOS 插件 cameraclick："+result);
            }
            function photoMessageError(result){
                alert("失败了:(  " + result);
            }

        } ])

});

