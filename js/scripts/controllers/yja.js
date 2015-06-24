define(['angularAMD'], function (app) {
    app.controller('yja', function ($scope, $window) {
        $scope.title = "angularAMD";
        console.log("$scope %o",$scope);
    });
});