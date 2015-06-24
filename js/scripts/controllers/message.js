define(['angularAMD'], function (app) {
	console.log("app ",app)
    app.controller('message', function ($scope) {
       console.log("$scope %o",$scope);
    });
});