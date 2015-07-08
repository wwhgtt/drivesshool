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
				 		if(result && result.constructor==Array){ 
				 			$scope.mapData = result;
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
							title : "场地信息", // 信息窗口标题
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


//扒数据的程序
// $(".datailCont table tr[align=middle]").each(function(index){
// 	if(index == 0)return; 
// 	var $area = $(this).find('td:eq(0)'); 
// 	var area = {}; 
// 	area.name = $area.text(); 
// 	area.id = index;
// 	var hospitalList = []; 
// 	area.hospitalList=hospitalList; 
// 	$hospitalList = $(this).find('table'); 
// 	$hospitalList.find('tr').each(function(index2){
// 		 var hospital = {};  
// 		 var name = $(this).find('td:eq(0)').text(); 
// 		 var address = $(this).find('td:eq(1)').text(); 
// 		 hospital.name = name; 
// 		 hospital.address = address; 
// 		 hospitalList.push(hospital); 
// 	} )
// 	areaList.push(area); 
// 	JSON.stringify(areaList);
// 	console.log(JSON.stringify(areaList))
// })
// [{"name":"锦江区","id":1,"hospitalList":[{"name":"成都市骨科医院","address":"成都市锦江区均隆街66－68号"},{"name":"武警四川省总队成都医院","address":"成都市石人南路21号"},{"name":"四川省人民医院","address":"成都市一环路西二段32号"},{"name":"成都市第十人民医院","address":"成都市锦江区静居寺路18号"},{"name":"成都市第二人民医院","address":"成都市庆云南街10号"},{"name":"成都市第七人民医院","address":"成都市致民路十二中街1号"},{"name":"中国人民解放军第452医院","address":"成都市九眼桥工农院街1号"}]},{"name":"青羊区","id":2,"hospitalList":[{"name":"四川省第五人民医院","address":"成都市青羊区商业街69号"},{"name":"成都军区装备部机关医院","address":"成都市同心路99号"},{"name":"武警四川省消防总队医院","address":"成都市青羊区石人南路21号"},{"name":"成都市中医药大学附属医院","address":"成都市十二桥路39号"},{"name":"四川省妇幼保健医院","address":"待详"},{"name":"成都军区八一骨科医院","address":"成都市青羊区武都路3号"},{"name":"成都市青羊区妇幼保健院","address":"成都市青羊区正通顺街53号"},{"name":"四川省第二中医医院","address":"成都市青羊区四道街20号"},{"name":"成都军区联勤部机关医院","address":"成都市青羊区通惠门路16号"},{"name":"成都飞机工业（集团）有限责任公司医院","address":"成都市青羊区黄田坝"},{"name":"成都市第九人民医院","address":"成都市包家巷77号"},{"name":"成都市妇幼保健院","address":"成都市实业街32号"},{"name":"成都市第八人民医院","address":"成都市草市街165号"},{"name":"成都军区机关医院","address":"成都市青羊区人民中路三段20号"}]},{"name":"金牛区","id":3,"hospitalList":[{"name":"成都市金牛区第二人民医院","address":"成都市金牛区石灰街85号"},{"name":"成都铁路局成都铁路中心医院","address":"成都市二环路北二段82号"},{"name":"中国第五冶金建设公司医院","address":"成都市一环路北三段53号"},{"name":"成都军区总医院","address":"成都市天回镇"},{"name":"成都医学院附属第一医院","address":"成都市新都区宝光大道278号"},{"name":"四川省建筑医院","address":"成都市金牛区星辉东路5号"},{"name":"核工业四一六医院","address":"成都市二环路北四段4号"},{"name":"成都市西区医院","address":"成都市金牛区蜀汉路1号"},{"name":"成都铁路分局医院","address":"成都市荷花池路二段32号"},{"name":"中铁二局集团中心医院","address":"成都市沙湾东一路85号"},{"name":"成都市金牛区人民医院","address":"成都市金牛区茶店子健康巷3号"},{"name":"成都市金牛区中医医院","address":"成都市金牛区天回镇上街128号"},{"name":"成都市公安局安康医院","address":"成都市金牛区马家花园路筒车巷19号"},{"name":"四川省林业中心医院","address":"成都市金牛区白马寺街10号"},{"name":"成都市金牛区妇幼保健院","address":"成都市火车北站西一路108号"}]},{"name":"武侯区","id":4,"hospitalList":[{"name":"西藏自治区人民政府驻成都办事处医院","address":"成都市洗面桥横街20号"},{"name":"四川大学华西医院","address":"成都市武侯区国学巷37号"},{"name":"四川省交通厅公路局成都医院","address":"郫县犀浦镇犀团路500号"},{"name":"四川省肿瘤医院","address":"成都市人民南路四段55号"},{"name":"四川省第四人民医院","address":"成都市城守东大街57号"},{"name":"成都体育学院附属体育医院","address":"成都市武候祠大街251号"},{"name":"三六三医院","address":"成都市倒桑树街108号"},{"name":"四川省红十字肿瘤医院","address":"成都市燃灯寺9号"},{"name":"成都市武侯区人民医院","address":"成都市武侯区广福桥街16号"},{"name":"中国人民武装警察部队四川省总队成都医院","address":"成都市浆洗街5号"},{"name":"四川省中西医结合医院","address":"成都市人民南路四段51号"},{"name":"成都军区空军机关医院","address":"成都市新南路87号附1号"},{"name":"武侯区第三人民医院","address":"成都市武侯区簇桥龙井中街109号"},{"name":"成都市武侯区第五人民医院","address":"武侯区金花镇草金街"},{"name":"成都现代医院","address":"成都市武侯区长益路4号"}]},{"name":"成华区","id":5,"hospitalList":[{"name":"成都市新华人民医院","address":"成都市双桥路180号"},{"name":"攀钢集团成都医院","address":"成都市成华区双华南路12号"},{"name":"成都市第六人民医院","address":"成都市成华区建设南街16号"}]},{"name":"高新区","id":6,"hospitalList":[{"name":"四川省司法警官总医院","address":"成都市外南机场路近都段16号"}]},{"name":"龙泉驿区","id":7,"hospitalList":[{"name":"成都市航天医院","address":"龙泉驿区龙泉镇鲸龙路121号"},{"name":"成都市龙泉驿区第一人民医院","address":"成都市龙泉驿区龙泉镇鸥鹏大道417号"},{"name":"成都市龙泉驿区中医医院","address":"龙泉驿区龙泉镇建设路68号"}]},{"name":"青白江区","id":8,"hospitalList":[{"name":"成都市青白江区人民医院","address":"青白江区青江南路87号"},{"name":"成都市青白江区中医医院","address":"青白江区城厢镇大东街1号"}]},{"name":"新都区","id":9,"hospitalList":[{"name":"成都市新都区人民医院","address":"成都市新都区新都镇上南街101号"}]},{"name":"温江区","id":10,"hospitalList":[{"name":"成都市第三人民医院","address":"成都市青龙街82号"},{"name":"成都市老年病医院","address":"成都市温江区万春东路56号"},{"name":"成都市温江区人民医院","address":"成都市温江区柳城镇万春东路10号"},{"name":"成都市第五人民医院","address":"成都市温江区柳城镇麻市街33号"},{"name":"成都市温江区中医医院","address":"成都市温江区柳城镇东大街156号"}]},{"name":"金堂县","id":11,"hospitalList":[{"name":"四川省监狱管理局中心医院","address":"金堂县清江镇"},{"name":"金堂县中医医院","address":"金堂县赵镇桔园路149号"},{"name":"金堂县第一人民医院","address":"金堂县赵镇郊山路69号"},{"name":"金堂县第二人民医院","address":"金堂县淮口镇淮白路275号"}]},{"name":"双流县","id":12,"hospitalList":[{"name":"四川省石油管理局总医院","address":"双流县华阳镇通济巷26号"},{"name":"双流县第二人民医院","address":"双流县华阳镇正北街97号"},{"name":"双流县第一人民医院","address":"双流县东升镇西北街149号"}]},{"name":"郫县","id":13,"hospitalList":[{"name":"郫县第二人民医院","address":"郫县唐昌镇北街124号"},{"name":"郫县中医医院","address":"郫县郫筒镇南大街342号"},{"name":"郫县人民医院","address":"郫县郫筒镇东大街125号"},{"name":"四川省交通厅公路局医院","address":"郫县犀浦镇犀团路500号"},{"name":"郫县第二人民医院","address":"郫县唐昌镇北街124号"}]},{"name":"大邑县","id":14,"hospitalList":[{"name":"四川省大邑县人民医院","address":"大邑县晋原镇北街323号"},{"name":"大邑县中医医院","address":"大邑县晋原镇城西街19号"}]},{"name":"蒲江县","id":15,"hospitalList":[{"name":"蒲江县人民医院","address":"蒲江县鹤山镇河西路18号"}]},{"name":"新津县","id":16,"hospitalList":[{"name":"新津县人民医院","address":"新津县五津镇惠安路26号"}]},{"name":"都江堰市","id":17,"hospitalList":[{"name":"都江堰市中医医院","address":"都江堰市建设路24号"},{"name":"都江堰市第二人民医院","address":"都江堰市太平街1号"},{"name":"都江堰市人民医院","address":"都江堰市宝莲路"}]},{"name":"彭州市","id":18,"hospitalList":[{"name":"彭州市人民医院","address":"彭州市天彭镇金彭西路184号"},{"name":"彭州市中医医院","address":"彭州市天彭镇南大街396号"},{"name":"彭州市疾病预防控制中心","address":"彭州市天彭镇龙塔路331号"}]},{"name":"邛崃市","id":19,"hospitalList":[{"name":"邛崃市中医医院","address":"邛崃市临邛镇西街59号"},{"name":"邛崃市人民医院","address":"邛崃市临邛镇南环路61号"}]},{"name":"崇州市","id":20,"hospitalList":[{"name":"崇州市中医医院","address":"崇州市崇阳镇上南街194号"},{"name":"崇州市第二人民医院","address":"崇州市崇阳镇唐安西路431号"},{"name":"崇州市人民医院","address":"崇州市崇阳镇唐安西路47号"}]},{"name":"锦江区","id":1,"hospitalList":[{"name":"成都市骨科医院","address":"成都市锦江区均隆街66－68号"},{"name":"武警四川省总队成都医院","address":"成都市石人南路21号"},{"name":"四川省人民医院","address":"成都市一环路西二段32号"},{"name":"成都市第十人民医院","address":"成都市锦江区静居寺路18号"},{"name":"成都市第二人民医院","address":"成都市庆云南街10号"},{"name":"成都市第七人民医院","address":"成都市致民路十二中街1号"},{"name":"中国人民解放军第452医院","address":"成都市九眼桥工农院街1号"}]},{"name":"青羊区","id":2,"hospitalList":[{"name":"四川省第五人民医院","address":"成都市青羊区商业街69号"},{"name":"成都军区装备部机关医院","address":"成都市同心路99号"},{"name":"武警四川省消防总队医院","address":"成都市青羊区石人南路21号"},{"name":"成都市中医药大学附属医院","address":"成都市十二桥路39号"},{"name":"四川省妇幼保健医院","address":"待详"},{"name":"成都军区八一骨科医院","address":"成都市青羊区武都路3号"},{"name":"成都市青羊区妇幼保健院","address":"成都市青羊区正通顺街53号"},{"name":"四川省第二中医医院","address":"成都市青羊区四道街20号"},{"name":"成都军区联勤部机关医院","address":"成都市青羊区通惠门路16号"},{"name":"成都飞机工业（集团）有限责任公司医院","address":"成都市青羊区黄田坝"},{"name":"成都市第九人民医院","address":"成都市包家巷77号"},{"name":"成都市妇幼保健院","address":"成都市实业街32号"},{"name":"成都市第八人民医院","address":"成都市草市街165号"},{"name":"成都军区机关医院","address":"成都市青羊区人民中路三段20号"}]},{"name":"金牛区","id":3,"hospitalList":[{"name":"成都市金牛区第二人民医院","address":"成都市金牛区石灰街85号"},{"name":"成都铁路局成都铁路中心医院","address":"成都市二环路北二段82号"},{"name":"中国第五冶金建设公司医院","address":"成都市一环路北三段53号"},{"name":"成都军区总医院","address":"成都市天回镇"},{"name":"成都医学院附属第一医院","address":"成都市新都区宝光大道278号"},{"name":"四川省建筑医院","address":"成都市金牛区星辉东路5号"},{"name":"核工业四一六医院","address":"成都市二环路北四段4号"},{"name":"成都市西区医院","address":"成都市金牛区蜀汉路1号"},{"name":"成都铁路分局医院","address":"成都市荷花池路二段32号"},{"name":"中铁二局集团中心医院","address":"成都市沙湾东一路85号"},{"name":"成都市金牛区人民医院","address":"成都市金牛区茶店子健康巷3号"},{"name":"成都市金牛区中医医院","address":"成都市金牛区天回镇上街128号"},{"name":"成都市公安局安康医院","address":"成都市金牛区马家花园路筒车巷19号"},{"name":"四川省林业中心医院","address":"成都市金牛区白马寺街10号"},{"name":"成都市金牛区妇幼保健院","address":"成都市火车北站西一路108号"}]},{"name":"武侯区","id":4,"hospitalList":[{"name":"西藏自治区人民政府驻成都办事处医院","address":"成都市洗面桥横街20号"},{"name":"四川大学华西医院","address":"成都市武侯区国学巷37号"},{"name":"四川省交通厅公路局成都医院","address":"郫县犀浦镇犀团路500号"},{"name":"四川省肿瘤医院","address":"成都市人民南路四段55号"},{"name":"四川省第四人民医院","address":"成都市城守东大街57号"},{"name":"成都体育学院附属体育医院","address":"成都市武候祠大街251号"},{"name":"三六三医院","address":"成都市倒桑树街108号"},{"name":"四川省红十字肿瘤医院","address":"成都市燃灯寺9号"},{"name":"成都市武侯区人民医院","address":"成都市武侯区广福桥街16号"},{"name":"中国人民武装警察部队四川省总队成都医院","address":"成都市浆洗街5号"},{"name":"四川省中西医结合医院","address":"成都市人民南路四段51号"},{"name":"成都军区空军机关医院","address":"成都市新南路87号附1号"},{"name":"武侯区第三人民医院","address":"成都市武侯区簇桥龙井中街109号"},{"name":"成都市武侯区第五人民医院","address":"武侯区金花镇草金街"},{"name":"成都现代医院","address":"成都市武侯区长益路4号"}]},{"name":"成华区","id":5,"hospitalList":[{"name":"成都市新华人民医院","address":"成都市双桥路180号"},{"name":"攀钢集团成都医院","address":"成都市成华区双华南路12号"},{"name":"成都市第六人民医院","address":"成都市成华区建设南街16号"}]},{"name":"高新区","id":6,"hospitalList":[{"name":"四川省司法警官总医院","address":"成都市外南机场路近都段16号"}]},{"name":"龙泉驿区","id":7,"hospitalList":[{"name":"成都市航天医院","address":"龙泉驿区龙泉镇鲸龙路121号"},{"name":"成都市龙泉驿区第一人民医院","address":"成都市龙泉驿区龙泉镇鸥鹏大道417号"},{"name":"成都市龙泉驿区中医医院","address":"龙泉驿区龙泉镇建设路68号"}]},{"name":"青白江区","id":8,"hospitalList":[{"name":"成都市青白江区人民医院","address":"青白江区青江南路87号"},{"name":"成都市青白江区中医医院","address":"青白江区城厢镇大东街1号"}]},{"name":"新都区","id":9,"hospitalList":[{"name":"成都市新都区人民医院","address":"成都市新都区新都镇上南街101号"}]},{"name":"温江区","id":10,"hospitalList":[{"name":"成都市第三人民医院","address":"成都市青龙街82号"},{"name":"成都市老年病医院","address":"成都市温江区万春东路56号"},{"name":"成都市温江区人民医院","address":"成都市温江区柳城镇万春东路10号"},{"name":"成都市第五人民医院","address":"成都市温江区柳城镇麻市街33号"},{"name":"成都市温江区中医医院","address":"成都市温江区柳城镇东大街156号"}]},{"name":"金堂县","id":11,"hospitalList":[{"name":"四川省监狱管理局中心医院","address":"金堂县清江镇"},{"name":"金堂县中医医院","address":"金堂县赵镇桔园路149号"},{"name":"金堂县第一人民医院","address":"金堂县赵镇郊山路69号"},{"name":"金堂县第二人民医院","address":"金堂县淮口镇淮白路275号"}]},{"name":"双流县","id":12,"hospitalList":[{"name":"四川省石油管理局总医院","address":"双流县华阳镇通济巷26号"},{"name":"双流县第二人民医院","address":"双流县华阳镇正北街97号"},{"name":"双流县第一人民医院","address":"双流县东升镇西北街149号"}]},{"name":"郫县","id":13,"hospitalList":[{"name":"郫县第二人民医院","address":"郫县唐昌镇北街124号"},{"name":"郫县中医医院","address":"郫县郫筒镇南大街342号"},{"name":"郫县人民医院","address":"郫县郫筒镇东大街125号"},{"name":"四川省交通厅公路局医院","address":"郫县犀浦镇犀团路500号"},{"name":"郫县第二人民医院","address":"郫县唐昌镇北街124号"}]},{"name":"大邑县","id":14,"hospitalList":[{"name":"四川省大邑县人民医院","address":"大邑县晋原镇北街323号"},{"name":"大邑县中医医院","address":"大邑县晋原镇城西街19号"}]},{"name":"蒲江县","id":15,"hospitalList":[{"name":"蒲江县人民医院","address":"蒲江县鹤山镇河西路18号"}]},{"name":"新津县","id":16,"hospitalList":[{"name":"新津县人民医院","address":"新津县五津镇惠安路26号"}]},{"name":"都江堰市","id":17,"hospitalList":[{"name":"都江堰市中医医院","address":"都江堰市建设路24号"},{"name":"都江堰市第二人民医院","address":"都江堰市太平街1号"},{"name":"都江堰市人民医院","address":"都江堰市宝莲路"}]},{"name":"彭州市","id":18,"hospitalList":[{"name":"彭州市人民医院","address":"彭州市天彭镇金彭西路184号"},{"name":"彭州市中医医院","address":"彭州市天彭镇南大街396号"},{"name":"彭州市疾病预防控制中心","address":"彭州市天彭镇龙塔路331号"}]},{"name":"邛崃市","id":19,"hospitalList":[{"name":"邛崃市中医医院","address":"邛崃市临邛镇西街59号"},{"name":"邛崃市人民医院","address":"邛崃市临邛镇南环路61号"}]},{"name":"崇州市","id":20,"hospitalList":[{"name":"崇州市中医医院","address":"崇州市崇阳镇上南街194号"},{"name":"崇州市第二人民医院","address":"崇州市崇阳镇唐安西路431号"},{"name":"崇州市人民医院","address":"崇州市崇阳镇唐安西路47号"}]},{"name":"锦江区","id":1,"hospitalList":[{"name":"成都市骨科医院","address":"成都市锦江区均隆街66－68号"},{"name":"武警四川省总队成都医院","address":"成都市石人南路21号"},{"name":"四川省人民医院","address":"成都市一环路西二段32号"},{"name":"成都市第十人民医院","address":"成都市锦江区静居寺路18号"},{"name":"成都市第二人民医院","address":"成都市庆云南街10号"},{"name":"成都市第七人民医院","address":"成都市致民路十二中街1号"},{"name":"中国人民解放军第452医院","address":"成都市九眼桥工农院街1号"}]},{"name":"青羊区","id":2,"hospitalList":[{"name":"四川省第五人民医院","address":"成都市青羊区商业街69号"},{"name":"成都军区装备部机关医院","address":"成都市同心路99号"},{"name":"武警四川省消防总队医院","address":"成都市青羊区石人南路21号"},{"name":"成都市中医药大学附属医院","address":"成都市十二桥路39号"},{"name":"四川省妇幼保健医院","address":"待详"},{"name":"成都军区八一骨科医院","address":"成都市青羊区武都路3号"},{"name":"成都市青羊区妇幼保健院","address":"成都市青羊区正通顺街53号"},{"name":"四川省第二中医医院","address":"成都市青羊区四道街20号"},{"name":"成都军区联勤部机关医院","address":"成都市青羊区通惠门路16号"},{"name":"成都飞机工业（集团）有限责任公司医院","address":"成都市青羊区黄田坝"},{"name":"成都市第九人民医院","address":"成都市包家巷77号"},{"name":"成都市妇幼保健院","address":"成都市实业街32号"},{"name":"成都市第八人民医院","address":"成都市草市街165号"},{"name":"成都军区机关医院","address":"成都市青羊区人民中路三段20号"}]},{"name":"金牛区","id":3,"hospitalList":[{"name":"成都市金牛区第二人民医院","address":"成都市金牛区石灰街85号"},{"name":"成都铁路局成都铁路中心医院","address":"成都市二环路北二段82号"},{"name":"中国第五冶金建设公司医院","address":"成都市一环路北三段53号"},{"name":"成都军区总医院","address":"成都市天回镇"},{"name":"成都医学院附属第一医院","address":"成都市新都区宝光大道278号"},{"name":"四川省建筑医院","address":"成都市金牛区星辉东路5号"},{"name":"核工业四一六医院","address":"成都市二环路北四段4号"},{"name":"成都市西区医院","address":"成都市金牛区蜀汉路1号"},{"name":"成都铁路分局医院","address":"成都市荷花池路二段32号"},{"name":"中铁二局集团中心医院","address":"成都市沙湾东一路85号"},{"name":"成都市金牛区人民医院","address":"成都市金牛区茶店子健康巷3号"},{"name":"成都市金牛区中医医院","address":"成都市金牛区天回镇上街128号"},{"name":"成都市公安局安康医院","address":"成都市金牛区马家花园路筒车巷19号"},{"name":"四川省林业中心医院","address":"成都市金牛区白马寺街10号"},{"name":"成都市金牛区妇幼保健院","address":"成都市火车北站西一路108号"}]},{"name":"武侯区","id":4,"hospitalList":[{"name":"西藏自治区人民政府驻成都办事处医院","address":"成都市洗面桥横街20号"},{"name":"四川大学华西医院","address":"成都市武侯区国学巷37号"},{"name":"四川省交通厅公路局成都医院","address":"郫县犀浦镇犀团路500号"},{"name":"四川省肿瘤医院","address":"成都市人民南路四段55号"},{"name":"四川省第四人民医院","address":"成都市城守东大街57号"},{"name":"成都体育学院附属体育医院","address":"成都市武候祠大街251号"},{"name":"三六三医院","address":"成都市倒桑树街108号"},{"name":"四川省红十字肿瘤医院","address":"成都市燃灯寺9号"},{"name":"成都市武侯区人民医院","address":"成都市武侯区广福桥街16号"},{"name":"中国人民武装警察部队四川省总队成都医院","address":"成都市浆洗街5号"},{"name":"四川省中西医结合医院","address":"成都市人民南路四段51号"},{"name":"成都军区空军机关医院","address":"成都市新南路87号附1号"},{"name":"武侯区第三人民医院","address":"成都市武侯区簇桥龙井中街109号"},{"name":"成都市武侯区第五人民医院","address":"武侯区金花镇草金街"},{"name":"成都现代医院","address":"成都市武侯区长益路4号"}]},{"name":"成华区","id":5,"hospitalList":[{"name":"成都市新华人民医院","address":"成都市双桥路180号"},{"name":"攀钢集团成都医院","address":"成都市成华区双华南路12号"},{"name":"成都市第六人民医院","address":"成都市成华区建设南街16号"}]},{"name":"高新区","id":6,"hospitalList":[{"name":"四川省司法警官总医院","address":"成都市外南机场路近都段16号"}]},{"name":"龙泉驿区","id":7,"hospitalList":[{"name":"成都市航天医院","address":"龙泉驿区龙泉镇鲸龙路121号"},{"name":"成都市龙泉驿区第一人民医院","address":"成都市龙泉驿区龙泉镇鸥鹏大道417号"},{"name":"成都市龙泉驿区中医医院","address":"龙泉驿区龙泉镇建设路68号"}]},{"name":"青白江区","id":8,"hospitalList":[{"name":"成都市青白江区人民医院","address":"青白江区青江南路87号"},{"name":"成都市青白江区中医医院","address":"青白江区城厢镇大东街1号"}]},{"name":"新都区","id":9,"hospitalList":[{"name":"成都市新都区人民医院","address":"成都市新都区新都镇上南街101号"}]},{"name":"温江区","id":10,"hospitalList":[{"name":"成都市第三人民医院","address":"成都市青龙街82号"},{"name":"成都市老年病医院","address":"成都市温江区万春东路56号"},{"name":"成都市温江区人民医院","address":"成都市温江区柳城镇万春东路10号"},{"name":"成都市第五人民医院","address":"成都市温江区柳城镇麻市街33号"},{"name":"成都市温江区中医医院","address":"成都市温江区柳城镇东大街156号"}]},{"name":"金堂县","id":11,"hospitalList":[{"name":"四川省监狱管理局中心医院","address":"金堂县清江镇"},{"name":"金堂县中医医院","address":"金堂县赵镇桔园路149号"},{"name":"金堂县第一人民医院","address":"金堂县赵镇郊山路69号"},{"name":"金堂县第二人民医院","address":"金堂县淮口镇淮白路275号"}]},{"name":"双流县","id":12,"hospitalList":[{"name":"四川省石油管理局总医院","address":"双流县华阳镇通济巷26号"},{"name":"双流县第二人民医院","address":"双流县华阳镇正北街97号"},{"name":"双流县第一人民医院","address":"双流县东升镇西北街149号"}]},{"name":"郫县","id":13,"hospitalList":[{"name":"郫县第二人民医院","address":"郫县唐昌镇北街124号"},{"name":"郫县中医医院","address":"郫县郫筒镇南大街342号"},{"name":"郫县人民医院","address":"郫县郫筒镇东大街125号"},{"name":"四川省交通厅公路局医院","address":"郫县犀浦镇犀团路500号"},{"name":"郫县第二人民医院","address":"郫县唐昌镇北街124号"}]},{"name":"大邑县","id":14,"hospitalList":[{"name":"四川省大邑县人民医院","address":"大邑县晋原镇北街323号"},{"name":"大邑县中医医院","address":"大邑县晋原镇城西街19号"}]},{"name":"蒲江县","id":15,"hospitalList":[{"name":"蒲江县人民医院","address":"蒲江县鹤山镇河西路18号"}]},{"name":"新津县","id":16,"hospitalList":[{"name":"新津县人民医院","address":"新津县五津镇惠安路26号"}]},{"name":"都江堰市","id":17,"hospitalList":[{"name":"都江堰市中医医院","address":"都江堰市建设路24号"},{"name":"都江堰市第二人民医院","address":"都江堰市太平街1号"},{"name":"都江堰市人民医院","address":"都江堰市宝莲路"}]},{"name":"彭州市","id":18,"hospitalList":[{"name":"彭州市人民医院","address":"彭州市天彭镇金彭西路184号"},{"name":"彭州市中医医院","address":"彭州市天彭镇南大街396号"},{"name":"彭州市疾病预防控制中心","address":"彭州市天彭镇龙塔路331号"}]},{"name":"邛崃市","id":19,"hospitalList":[{"name":"邛崃市中医医院","address":"邛崃市临邛镇西街59号"},{"name":"邛崃市人民医院","address":"邛崃市临邛镇南环路61号"}]},{"name":"崇州市","id":20,"hospitalList":[{"name":"崇州市中医医院","address":"崇州市崇阳镇上南街194号"},{"name":"崇州市第二人民医院","address":"崇州市崇阳镇唐安西路431号"},{"name":"崇州市人民医院","address":"崇州市崇阳镇唐安西路47号"}]}]
