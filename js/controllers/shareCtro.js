angular.module("controllers.shareCtro",["controllers.coachDetile"])
.controller("shareCtro",function(
	$scope,
	$http
){
	// f9908ba6f9123911cb02e59a527dc1ca
	console.log("$scope %o",$scope);
	$("#shareDetile").click(function(){
		$scope.shareDetileShow =true;
	})
	// $(".shareWeixin").click(function(){

	// })
	// $http.get("https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=f9908ba6f9123911cb02e59a527dc1ca&type=jsapi",{

	// })
	// .success(function(){
	// 	console.log(result);l
	// })
})