angular.module("controllers.message",[])
.controller("message",function(
	$scope,
	$GetSiteInfo
){
	// $scope.mapData = [];
	// $scope.$on("siteInfoChange",function(){
	// 	console.log($scope.siteInfo);
	// 	var long=$scope.siteInfo.longList,
	//  		lat=$scope.siteInfo.latList;
	//  	var distance=$scope.siteInfo.distance;
	//  	$GetSiteInfo.getSiteInfo(long,lat,distance,function(err,result){
	// 	 	if(err){
	// 	 		alert("sorry,访问出错");
	// 	 	}else{
	// 	 		if(result && result.constructor==Array){ 
	// 	 			$scope.mapData = result;
	// 			}else{
	// 	 			alert("sorry，获取失败") 
	// 	 		}
	// 	 	}
	// 	})
	// })
})