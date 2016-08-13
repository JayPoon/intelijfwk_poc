/* JavaScript content from scripts/console/controllers/loginCtrl.js in folder common */
define([ "./controllers" ], function (controllers) {
    "use strict";

    
    controllers.controller("EntranceCtrl",function($scope) {
    })

    .controller("TabsCtrl",function($scope,$ionicTabsDelegate) {
         
    })

    .controller("PluginsCtrl",function($scope,$ionicTabsDelegate) {
         
    })

    .controller('DeviceCtrl', function($ionicPlatform, $scope,$cordova,$cordovaDevice, $ionicTabsDelegate) {
            
            var device = $cordovaDevice.getDevice();
            $scope.manufacturer = device.manufacturer;
            $scope.model = device.model;
            $scope.platform = device.platform;
            $scope.uuid = device.uuid;
            $scope.serial = device.serial;
            $scope.isVirtual = device.isVirtual;
            $scope.version = device.version;
        
    })
    .controller('NetworkCtrl', function($ionicPlatform,$cordovaNetwork, $rootScope,$scope,$cordova) {
            $scope.type = $cordovaNetwork.getNetwork()
            $scope.isOnline = $cordovaNetwork.isOnline()
            $scope.isOffline = $cordovaNetwork.isOffline()

            // listen for Online event
            $rootScope.$on('$cordovaNetwork:online', function(event, networkState) {
                console.log('The device has come online!', networkState);
                // Sync local data to your server here
                $scope.networkState = networkState;
                $scope.isOnline = true;
                $scope.isOffline = false;
            });     

            // listen for Offline event
            $rootScope.$on('$cordovaNetwork:offline', function(event, networkState) {
                console.log('The device has gone offline!', networkState);
                // the device is offline, we need to store the data locally
                $scope.networkState = networkState;
                $scope.isOnline = false;
                $scope.isOffline = true;
            });
        
    })
    .controller('CameraCtrl', function($ionicPlatform, $scope, $cordovaCamera,$cordova) {
        
        $cordova.ready().then(function(){
            console.log("cordova is ready, start camera.");
            var camOptions = {
                quality: 100,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 200,
                targetHeight: 200,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false
            }
            , ablumOptions = {
                quality: 100,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 200,
                targetHeight: 200,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false
            }

            $scope.takePicture = function() {
                console.log("READY TO TAKE A PICTURE.");
                $cordovaCamera.getPicture(camOptions).then(function(imageData) {
                    console.log("imageData:" + imageData);
                    $scope.cameraImgSrc = "data:image/jpeg;base64," + imageData;
                }, function(err) {
                    console.log(err);
                });
            }
            $scope.browseAblum = function() {
                console.log("READY TO BROWSE A PICTURE.");
                $cordovaCamera.getPicture(ablumOptions).then(function(imageURI) {
                    $scope.ablumImgSrc = imageURI;
                }, function(err) {
                    console.log(err);
                });
            }
        });
        
    })
    .controller('BarcodeCtrl', function($ionicPlatform, $scope, $cordovaBarcodeScanner,$cordova) {
        // install  :    cordova plugin add https://github.com/phonegap/phonegap-plugin-barcodescanner.git
        // $cordova.ready().then(function(){
            // console.log("cordova is ready, start camera.");
            var scanConfig = {
                "preferFrontCamera" : false, // iOS and Android
                "showFlipCameraButton" : false, // iOS and Android
                "prompt" : "Place a barcode inside the scan area", // supported on Android only
                formats : "QR_CODE,CODE_128,CODE_39,CODE_93,EAN_8,EAN_13", // default: all but PDF_417 and RSS_EXPANDED
                "orientation" : "landscape" // Android only (portrait|landscape), default unset so it rotates with the device
            }
            $scope.scancode = function(){
                $cordovaBarcodeScanner.scan(scanConfig).then(function(result){
                    $scope.text = result.text;
                    $scope.format = result.format;
                    $scope.cancelled = result.cancelled;
                },function(){
                    alert("Scanning failed: " + error);
                })
            }
            
        // });
        
    })
    // .controller("PluginsCtrl", [ "$scope", "$state", "$localStorage",
    // .controller("PluginsCtrl", [ "$scope", "$state", "$localStorage","$stateParams","$timeout","cordovaService",
    //     function ($scope, $state, $localStorage,$stateParams,$timeout,cordovaService) {
    //         //var exec = cordova.require('cordova/exec');
    //         var exec = cordovaService.exec();
    //         // $scope.items = [];
    //         // var base = 0;
    //         // $scope.load_more = function(){
    //         //     $timeout(function(){
    //         //         for(var i=0;i<10;i++,base++)
    //         //             $scope.items.push(["item ",base].join(""));
    //         //         $scope.$broadcast("scroll.infiniteScrollComplete");
    //         //     },500);
    //         // };

    //         $scope.backto=function () {
    //             $state.go("login" );
    //         }



    //         //支付宝支付
    //         $scope.aliPay=function () {
    //             exec(aliPayMessageSuccess, aliPayMessageError, "PaymentPlugin", "aliPay",
    //                 ["0.01","508608f84","无限极支付","芒果捞"])
    //         };

    //         function aliPayMessageSuccess(result){
    //             alert("你成功连接IOS 插件 这是aliPay返回数据："+result);
    //         }
    //         function aliPayMessageError(result){
    //             alert("失败了:(  " + result);

    //         }

    //         //微信支付
    //         $scope.wxPay=function () {
    //             exec(wxPayMessageSuccess, wxPayMessageError, "PaymentPlugin", "wxPay",
    //                 ["12","K90800066489","无限极支付"])
    //         };

    //         function wxPayMessageSuccess(result){
    //             alert("你成功连接IOS 插件 这是wxPay返回数据："+result);
    //         }
    //         function wxPayMessageError(result){
    //             alert("失败了:(  " + result);
    //         }




    //         //自定义分享
    //         $scope.shareclick=function () {
    //             exec(customShareMessageSuccess, customShareMessageError, "CustomSharePlugin", "customShare", ["Hello World"])
    //         };

    //         function customShareMessageSuccess(result){
    //             alert("你成功连接IOS 插件 shareclick："+result);
    //         }

    //         function customShareMessageError(result){
    //             alert("失败了:(  " + result);
    //         }



    //         //二维码/条形码扫描
    //         $scope.scanclick=function () {
    //             exec(scanMessageSuccess, scanMessageError, "ScanPlugin", "scan", [])
    //         };

    //         function scanMessageSuccess(result){
    //             alert("你成功连接IOS 插件 这是scanclick返回数据："+result);
    //         }
    //         function scanMessageError(result){
    //             alert("失败了:(  " + result);
    //         }




    //         //检查网络状态和获取设备信息
    //         $scope.checkwificlick=function () {
    //             exec(checkWifiMessageSuccess, checkWifiMessageError, "CheckWifiStatusPlugin", "checkWifiStatus", ["1","2"])
    //         };

    //         function checkWifiMessageSuccess(result){
    //             alert("你成功连接IOS 插件 checkwificlick："+result);
    //         }
    //         function checkWifiMessageError(result){
    //             alert("失败了:(  " + result);
    //         }



    //         //摇一摇
    //         $scope.shakeclick=function () {
    //             exec(shakeMessageSuccess, shakeMessageError, "ShakePlugin", "shake", ["shake"])
    //         };

    //         function shakeMessageSuccess(result){
    //             alert("你成功连接IOS 插件 shakeclick："+result);
    //         }
    //         function shakeMessageError(result){
    //             alert("失败了:(  " + result);
    //         }



    //         //图片水印和签名
    //         $scope.waterclick=function () {
    //             exec(waterMarkMessageSuccess, waterMarkMessageError, "WatermarkPhotoPlugin", "waterMarkPhoto", ["图片水印"])
    //         };

    //         function waterMarkMessageSuccess(result){
    //             alert("你成功连接IOS 插件 waterclick："+result);

    //         }
    //         function waterMarkMessageError(result){
    //             alert("失败了:(  " + result);
    //         }




    //         //拍照编辑和选择照片
    //         $scope.cameraclick=function () {
    //             exec(photoMessageSuccess, photoMessageError, "PhotoWitnSelectPlugin", "photoWitnSelect", ["photo"])
    //         };

    //         function photoMessageSuccess(result){
    //             alert("你成功连接IOS 插件 cameraclick："+result);
    //         }
    //         function photoMessageError(result){
    //             alert("失败了:(  " + result);
    //         }

    //     } ])

});

