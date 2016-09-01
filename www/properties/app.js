
/* JavaScript content from scripts/app.js in folder common */
define([
    'angular',
    'ngStorage',
    'angular-messages',
    'ngCordova',
    'ngCordovaMocks',
    // 'vconsole',
    './js/states/_base',
    './js/controllers/_base',
    './js/directives/_base',
    './js/services/_base'
    
], function(angular) {
    'use strict';
    var ns = window.$config.meta.ns
    , app = angular.module(ns.module, ['ionic',ns.services, ns.states, ns.controllers, ns.directives,
    'ngStorage','ngMessages','ngCordova','ngCordovaMocks'])
    .run(function($ionicPlatform,$rootScope,$state,loginService) {

        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }

        });  

        function unauthorized() {
            console.log("user is unauthorized, sending to login");
            $state.go('login');
        }

        function logout() {
            loginService.logout();
        }

        $rootScope.$on('unauthorized', function () {
            unauthorized();
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState) {
            if (toState.name == 'login') {
                logout();
            }else if(toState.name != 'login' && toState.name != 'register' && !loginService.isLogin()){
                unauthorized()
            }
        });

    })

    return app;
});
