
/* JavaScript content from scripts/bootstrap.js in folder common */
define([
    'angular',
    'app'
], function(angular) {
    'use strict';
    var module = $config.meta.ns.module;
    angular.element(document).ready(function() {
        //automatically detecte browser or device 
        if (window.cordova) {
            console.log("[imfw] Running in Cordova, will bootstrap AngularJS once 'deviceready' event fires.");
            document.addEventListener('deviceready', function () {
                console.log("[imfw] Deviceready event has fired, bootstrapping AngularJS.");
                angular.bootstrap(document.body, [module]);
            }, false);
        } else {
            console.log("[imfw] Running in browser, bootstrapping AngularJS now.");
            angular.bootstrap(document.body, [module]);
        }
    });
   
});