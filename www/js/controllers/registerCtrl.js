/* JavaScript content from scripts/console/controllers/loginCtrl.js in folder common */
define(["./controllers"], function (controllers) {
    "use strict";

    controllers.controller("registerCtrl", ["$scope", "$state", "$localStorage", "$timeout", "registerService",
        function ($scope, $state, $localStorage, $timeout, registerService) {
            $scope.email = "1@1"
            $scope.password = "1@1"
            $scope.cfmpassword = "1@1"
            //qu login界面
            $scope.backto = function () {
                $state.go("login");
            }
            $scope.signup = function(form) {
               
                if(form.$valid) {
                    // $state.go('home');
                    var params = {
                        "email": $scope.email,
                        "password": $scope.password,
                        "accountname": $scope.email
                    };

                    // registerService.setRegister(params).then(function (data) {

                    //     if (data.status == 1) {
                    //         console.log("Signup succefully.")
                    //         $state.go("login");
                    //     } else {

                    //     }

                    // });

                    registerService.register(params).then(function (data) {
                        alert(data);
                    });
                }
            };  

            //ȷ��ע��
            // $scope.submit = function () {
            //     var Regex = /^(?:\w+\.?)*\w+@(?:\w+\.)*\w+$/;
            //     if ($scope.email == undefined) {
            //         alert("邮箱不能为空");
            //         return false;
            //     } else if (!Regex.test($scope.email)) {
            //         alert("您输入的邮箱不正确");
            //         return false;
            //     }
            //     if ($scope.pwd == undefined) {
            //         alert("请输入密码");
            //         return false;
            //     } else if ($scope.repwd == undefined) {
            //         alert("请填写确认密码");
            //         return false;
            //     }
            //     if ($scope.pwd != undefined && $scope.repwd != undefined) {
            //         if ($scope.pwd != $scope.repwd) {
            //             alert("两次密码输入不一致");
            //             return false;
            //         }
            //     }

            //     var params = {
            //         "account": $scope.email,
            //         "pasw": $scope.pwd,
            //         "accountname": $scope.email
            //     };

            //     registerService.setRegister(params).then(function (data) {

            //         if (data.status == 1) {
            //             $state.go("login");
            //         } else {


                    
            //         }


            //     });

            // };
        }])
});

