/**
 *Copyright 2014 Erealm Info & Tech.
 *
 * Created by ken on 12/13/2014.
 */

'use strict';

angular.module('erealm').controller('LoginController' , ['$scope' , 'client' , function($scope, client) {
    $scope.user = { };
    $scope.login =function(){
        client.login($scope.user).then(function(result) {
            if (!result.data) return;
            $scope.$root.mainLoading = true;
            window.location = '/admin';
        });
    };
}]);
