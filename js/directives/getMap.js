angular.module("directives.getMap",[])
.directive("getMap",function(
	$ionicPopup,
	$GetHospital
){
	return {
		restrict:"A",
		link:function($scope,element,attr){
			var map = new BMap.Map("getMap");
			function myFun(result){
				var cityName = result.name;
				map.setCenter(cityName);
				map.centerAndZoom(cityName,13);
			}
			var myCity = new BMap.LocalCity();
			myCity.get(myFun);
			map.enableScrollWheelZoom(true);
	        // 获取地图中心点并显示出返回的数据
	        map.addEventListener("load", showInfo);
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
			 	var cityId=1930;
			 	$GetHospital.GetHospital(cityId,function(err,result){
				 	if(err){
				 		$ionicPopup.alert({
					    title: 'sorry,获取失败'
						});
				 	}else{
				 		if(result && result.hospitalList){ 
				 			$scope.mapData = result.hospitalList;
						}else if(result && result.errorInfo){
							var errorInfo=result.errorInfo;
				 			$ionicPopup.alert({
							    title: errorInfo
							});
				 		}
				 	}
				})
			}
			//把获取到的值放到百度地图中去
			$scope.$watchCollection("mapData",function(newMapData){
				for(var index in newMapData){
					(function(){
						var mapData = newMapData[index];
						marker = new BMap.Marker(new BMap.Point(mapData.location[0],mapData.location[1]));
				        // 创建标注
				        map.addOverlay(marker);
						var opts = {
							width : 50,     // 信息窗口宽度
							height: 25,     // 信息窗口高度
							title :mapData.address, // 信息窗口标题
							enableMessage:false,//设置允许信息窗发送短息
							message:""
						}
						var infoWindow = new BMap.InfoWindow(mapData.name, opts);  // 创建信息窗口对象 
						marker.addEventListener("click", function(e){
							this.openInfoWindow(infoWindow); //开启信息窗口
							e.domEvent.stopPropagation();
						});
					})(index);
				}
			})
		}
	}
})