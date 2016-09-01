/* JavaScript content from scripts/console/controllers/loginCtrl.js in folder common */
define(["./controllers"], function (controllers) {
  "use strict";

  controllers.controller("loginCtrl", ["$scope", "$state", "$localStorage", "$timeout", "loginService",
    function ($scope, $state, $localStorage, $timeout, loginService) {
      var vm = this;
      
      //注册界面
      this.register = function () {
        $state.go("register");
      }

      //验证邮箱和密码
      this.signIn = function (form) {
        if(form.$valid){
            var params = {
            "account": this.email,
            "pasw": this.password
          };
          //调用登录的service方法
          loginService.login(params).then(function (responseData) {
            if (responseData.status == "1") {
              $state.go("search");
            } else {
              alert(responseData.msg)
            }
          }, function (errorMessage) {
            console.log(errorMessage);
          });
        }
      };

      //qq 登入
      $scope.qqclick = function () {
        //QQ登录
        var checkClientIsInstalled = 1;//default is 0,only for iOS
        YCQQ.ssoLogin(function(args){
          alert("qq登录成功！用户ID" + args.userid);
          console.log(args.access_token);
          console.log(args.userid);
        },function(reason){
          alert("微信登录失败！原因： " + reason);
        },checkClientIsInstalled);
       
      }

      //微信 登入
      $scope.wxclick = function () {
        //微信登录
        var scope = "snsapi_userinfo";
        Wechat.auth(scope, function (response) {
          alert("微信登录成功！");
          // you may use response.code to get the access token.
          console.log(JSON.stringify(response));
        }, function (reason) {
          alert("微信登录失败！原因： " + reason);
        });

     
      }

      //微博 登入
      $scope.sinaclick = function () {
        //微博登录
        YCWeibo.ssoLogin(function(args){
          alert("微博登录成功！用户ID" + args.userid);
          console.log(args.access_token);
          console.log(args.userid);
        },function(reason){
           alert("微信登录失败！原因： " + reason);
        });

      }
    }])
});



