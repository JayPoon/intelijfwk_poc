/* JavaScript content from scripts/console/controllers/loginCtrl.js in folder common */
define([ "./../controllers/controllers" ], function (controllers) {
    "use strict";

    controllers.controller("infoCtrl", [ "$scope", "$state", "$localStorage","$stateParams",
        function ($scope, $state, $localStorage,$stateParams) {

            $scope.backto = function () {
                $state.go("search");
            };
            $scope.infoItem=$stateParams.infoItem;
        } ]);

});


