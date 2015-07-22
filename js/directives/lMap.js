angular.module("directives.lMap",[])
.directive("lMap",function(
	$GetSiteInfo,
	$ionicPopup
){
	return {
		restrict:"A",
		link:function($scope,element,attr){
			var map = new BMap.Map("l-map");
			function myFun(result){
				var cityName = result.name;
				map.setCenter(cityName);
				map.centerAndZoom(cityName,13);
			}
			var myCity = new BMap.LocalCity();
			myCity.get(myFun);
			map.enableScrollWheelZoom(true);
	        //获取地图中心点并显示出返回的数据
	        map.addEventListener("load", showInfo);
	        map.addEventListener("dragend", showInfo);
	        function showInfo(e){
				map.clearOverlays();
				var center = map.getCenter();
				marker = new BMap.Marker(new BMap.Point(center.lng, center.lat));
			    var longList=center.lng,
	            	latList=center.lat;
	            var bounds = map.getBounds(); //得到边界
				var changdu=bounds.getSouthWest().lng;
				var changduone= bounds.getNorthEast().lng;
				var gaodu=bounds.getNorthEast().lat;
				var gaoduone=bounds.getSouthWest().lat;
				var finall=(changdu-changduone);
				var finallone=(gaodu-gaoduone);
				var resultone=Math.sqrt(Math.pow(finall,2)+Math.pow(finallone,2));
				var distance=resultone/2;
	            $scope.siteInfo={longList:longList,latList:latList,distance:distance};
	            $scope.mapData = [];
	            var long=$scope.siteInfo.longList,
			 		lat=$scope.siteInfo.latList;
			 	var distance=$scope.siteInfo.distance;
			 	$GetSiteInfo.getSiteInfo(long,lat,distance,function(err,result){
				 	if(err){
				 		$ionicPopup.alert({
					    title: 'sorry,获取失败'
						});
				 	}else{
				 		if(result && result.success==true){ 
				 			$scope.mapData = result.siteList;
						}else if(result && result.errorInfo){
							var errorInfo=result.errorInfo;
				 			$ionicPopup.alert({
							    title: errorInfo
							});
				 		}
				 	}
				})
			}
			$scope.$watchCollection("mapData",function(newMapData){
				for(var index in newMapData){
					(function(){
						var mapData = newMapData[index];
						marker = new BMap.Marker(new BMap.Point(mapData.location[0],mapData.location[1]));
				        // 创建标注
				        map.addOverlay(marker);
						var opts = {
							width : 50,     
							height: 25,   
							title : mapData.address, 
							enableMessage:false,
							message:""
						}
						var content=
							"<div>"+
							"<p class='mapDataName'>"+mapData.name+"</p>"+"</br>"
							+"<p class='mapDataAddress'>"+mapData.address+"</p>"+"<a href='/yja/siteCoach/"+mapData._id+"'>"+
							"<button class='button button-balanced siteCoachs' >"+"查看场地教练"+"</button>"+"</a>"+
							"</div>";
						var infoWindow = new BMap.InfoWindow(content);
						marker.addEventListener("click", function(e){
							this.openInfoWindow(infoWindow);
							e.domEvent.stopPropagation();
						});
					})(index);
				}
			})
		}
	}
})