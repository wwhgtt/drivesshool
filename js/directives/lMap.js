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
	        // map.addEventListener("dragend", showInfo);
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
				var distance=100000000;
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
			$scope.$watchCollection("mapData",function(newValue){
				// localStorage.setItem("oldValue",oldValue);
				for(var index in newValue){
					(function(){
						var mapData = newValue[index];
						marker = new BMap.Marker(new BMap.Point(mapData.location.x,mapData.location.y));
				        // 创建标注
				        map.addOverlay(marker);
						var opts = {
							width : 50,     
							height: 25,   
							title :"", 
							enableMessage:false,
							message:""
						}
						var content=
							"<div class='borderDiv'>"+
							"<p class='mapDataName'>"+mapData.name+"</p>"+"</br>"
							+"<p class='mapDataAddress'>"+mapData.address+"</p>"+
							"</div>";
						var infoWindow = new BMap.InfoWindow(content,opts);
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