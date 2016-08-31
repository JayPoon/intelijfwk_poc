
/* JavaScript content from scripts/app.js in folder common */
define([
    'angular',
    //'angular',
    // 'angular-cookies',
    // 'ui.router',
    'ngStorage',
    // 'ui.bootstrap',
    // 'angular-animate',
    // 'angular-growl',
    // 'angular-ui-validate',
    // 'angular-sanitize',
    // 'angular-locale-zh-cn',
    // 'angular-translate',
    // 'angular-file-upload',
    'angular-messages',
    'ngCordova',
    'ngCordovaMocks',
    'backand',
    // 'vconsole',
    // 'bindonce',
    // 'navtree',
    './js/plugins/backand/index',
    './js/states/_base',
    './js/controllers/_base',
    './js/directives/_base',
    './js/services/_base'
    
], function(angular) {
    'use strict';
    var ns = window.$config.meta.ns
    , app = angular.module(ns.module, [
        //'ui.router', 'ngStorage', 'ui.bootstrap',  'ui.validate', 'ngSanitize', 'ngAnimate', 'ngCookies', 'angular-growl', 'pasvaz.bindonce', 'angularBootstrapNavTree', 'pascalprecht.translate', 'angularFileUpload','ngCordova', 
    'ionic',ns.services, ns.states, ns.controllers, ns.directives,'ngStorage','ngMessages','plugins.backand','backand','ngCordova','ngCordovaMocks'])
    .run(function($ionicPlatform,$cordova,Backand,$rootScope,BackendAuthService,$state) {

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
            $state.go('bkndlogin');
        }

        $rootScope.$on('unauthorized', function () {
            unauthorized();
        });

        //  $rootScope.$on('$stateChangeSuccess', function (event, toState) {
        //     if (toState.name == 'backand.login') {
        //         BackendAuthService.logout();
        //     }
        //     else if (toState.name != 'tab.login' && !Backand.getToken() ) {
        //         unauthorized();
        //     }
        // });

    })

    return app;
});
