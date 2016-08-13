
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
    // 'vconsole',
    // 'bindonce',
    // 'navtree',
    './js/states/_base',
    './js/controllers/_base',
    './js/directives/_base',
    './js/services/_base'
    
], function(angular) {
    'use strict';
    var ns = window.$config.meta.ns
    , app = angular.module(ns.module, [
        //'ui.router', 'ngStorage', 'ui.bootstrap',  'ui.validate', 'ngSanitize', 'ngAnimate', 'ngCookies', 'angular-growl', 'pasvaz.bindonce', 'angularBootstrapNavTree', 'pascalprecht.translate', 'angularFileUpload','ngCordova', 
    'ionic',ns.services, ns.states, ns.controllers, ns.directives,'ngStorage','ngMessages','ngCordova','ngCordovaMocks'])
    .run(function($ionicPlatform,$cordova) {

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

    })

    return app;
});
