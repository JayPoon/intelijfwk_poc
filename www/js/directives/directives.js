
/* JavaScript content from scripts/console/directives/directives.js in folder common */
define(['angular'], function (angular) {
    'use strict';
    var compareTo = function() {
        return {
            require: "ngModel",
            scope: {
            otherModelValue: "=compareTo"
            },
            link: function(scope, element, attributes, ngModel) {
            
            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
            }
        };
    };

    return angular.module($config.meta.ns.directives, []).directive("compareTo", compareTo);
 });