/* JavaScript content from scripts/console/controllers/loginCtrl.js in folder common */
define(["./controllers"], function (controllers) {
    "use strict";

    controllers.controller("registerCtrl", ["$scope", "$state", "$localStorage", "$timeout", "registerService",
        function ($scope, $state, $localStorage, $timeout, registerService) {
            
            var vm = this;

            $scope.backto = function () {
                $state.go("login");
            }
            this.signup = function(form) {
               
                if(form.$valid) {
                    var params = {
                        "account": this.email,
                        "pasw": this.password,
                        "accountname": this.email
                    };

                    registerService.register(params).then(function (data) {
                        if (data.status == 1) {
                            console.log("Signup successfully.")
                            
                            alert("注册成功,")
                            $state.go("login");
                           
                        } else {
                            alert(data.msg)
                        }
                    });
                }
            };  
        }])
});

