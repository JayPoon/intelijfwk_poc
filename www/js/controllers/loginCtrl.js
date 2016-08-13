/* JavaScript content from scripts/console/controllers/loginCtrl.js in folder common */
define(["./controllers"], function (controllers) {
  "use strict";

  controllers.controller("loginCtrl", ["$scope", "$state", "$localStorage", "$timeout", "loginService",
    function ($scope, $state, $localStorage, $timeout, loginService, cordovaService) {
      
      //注册界面
      $scope.register = function () {
        $state.go("register");
      }

      //验证邮箱和密码
      $scope.signIn = function () {
        var flag = true;
        var Regex = /^(?:\w+\.?)*\w+@(?:\w+\.)*\w+$/;
        if ($scope.email == undefined) {
          alert("邮箱不能为空");
          flag = false;
        } else if (!Regex.test($scope.email)) {
          alert("您输入的邮箱不正确");
          flag = false;
        }
        if ($scope.password == undefined) {
          alert("您输入的密码不能为空");
          flag = false;
        }
        if (flag) {
          var params = {
            "account": $scope.email,
            "pasw": $scope.password
          };
          //调用登录的service方法
          loginService.getUserLogin(params).then(function (responseData) {
            if (responseData.status == "1") {
              //保存 userId
              window.localStorage.setItem("userId", responseData.t.userId);
              $state.go("search");
            } else {
              alert("账号密码错误")
            }
          }, function (errorMessage) {
            console.log(errorMessage);
          });
        }
      };


      //qq 登入
      $scope.qqclick = function () {
        alert("qq 登入");
        //QQ登录
        var checkClientIsInstalled = 1;//default is 0,only for iOS
        YCQQ.ssoLogin(function(args){
          alert(args.access_token);
          alert(args.userid);
        },function(failReason){
          console.log(failReason);
        },checkClientIsInstalled);





        // exec(qqMessageSuccess, qqMessageError, "ThirdLoginPlugin", "qqLogin", ["qq", "123"]);
      }


      // function qqMessageSuccess(result) {
      //   alert("你成功连接IOS 插件 这是qqclick返回数据：" + result);
      // }
      //
      // function qqMessageError(result) {
      //   alert("失败了:(  " + result);
      // }

      //微信 登入
      $scope.wxclick = function () {
        alert("微信 登入");
        //微信登录
        var scope = "snsapi_userinfo";
        Wechat.auth(scope, function (response) {
          // you may use response.code to get the access token.
          alert(JSON.stringify(response));
        }, function (reason) {
          alert("Failed: " + reason);
        });

        // exec(wxMessageSuccess, wxMessageError, "ThirdLoginPlugin", "wxLogin", ["wechat", "123"]);
      }

      // function wxMessageSuccess(result) {
      //   alert("你成功连接IOS 插件 这是wxclick返回数据：" + result);
      // }
      //
      // function wxMessageError(result) {
      //   alert("失败了:(  " + result);
      // }


      //新浪 登入
      $scope.sinaclick = function () {


        alert("新浪 登入");

        //微博登录
        YCWeibo.ssoLogin(function(args){
          alert(args.access_token);
          alert(args.userid);
        },function(failReason){
          console.log(failReason);
        });

        // exec(sinaMessageSuccess, sinaMessageError, "ThirdLoginPlugin", "sinaLogin", ["sina", "123"]);
      }

      // function sinaMessageSuccess(result) {
      //   alert("你成功连接IOS 插件 这是sinaclick返回数据：" + result);
      // }
      //
      // function sinaMessageError(result) {
      //   alert("失败了:(  " + result);
      // }
      //






    }])
});



