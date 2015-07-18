angular.module("controllers.coachList",[])
.controller("coachList",function(
	$scope,
	$getCoach,
	$ionicPopup,
	$getSignal,
	$getArea,
	$http,
	$fifterCoach
){

	$scope.coach={key:"",lat:"",long:"",filterArea:"",filterNone:"",filterModel:""};
	$scope.search=function(){
		var key=$scope.coach.key;
		var url=location.href.split("#")[0];
		$getSignal.getSignal(url,function(err,result){
			if (err) {
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true ){
					var timestamp=result.result.timestamp,
						nonceStr=result.result.noncestr;
						signature=result.result.signature;
					wx.config({
					    debug: false, // 开启调试模式
					    appId: 'wx678c9951b011eabe', // 必填，公众号的唯一标识
					    timestamp:timestamp , // 必填，生成签名的时间戳
					    nonceStr: nonceStr, // 必填，生成签名的随机串
					    signature:signature,// 必填，签名，见附录1
					    jsApiList: ["getLocation"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
					});
					wx.getLocation({
					    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
					    success: function (res) {
					        $scope.coach.lat = res.latitude; // 纬度，浮点数，范围为90 ~ -90
					        $scope.coach.long = res.longitude; // 经度，浮点数，范围为180 ~ -180。
					        var speed = res.speed; // 速度，以米/每秒计
					        var accuracy = res.accuracy; // 位置精度
					        var lat=$scope.coach.lat,
								long=$scope.coach.long;
							$getCoach.getCoach(key,lat,long,function(err,result){
								if (err) {
									alert("sorry,访问出错");
								}else{
									if(result && result.coachList.length !== 0){
										$scope.coachShow=true; 
							 			$scope.coachList=result.coachList;
									}else if(result && result.errorInfo){
										var errorInfo=result.errorInfo;
							 			$ionicPopup.alert({
										    title: errorInfo
										});
							 		}else{
							 			$ionicPopup.alert({
										    title: 'sorry，没有您要找的教练'
										});
							 		}
								};
							})
					    },
					    error:function(){
					    	$ionicPopup.alert({
							    title: "sorry,系统报错"
							});
					    }
					});
				}else if(result && result.errorInfo ){
					var errorInfo=result.errorInfo;
		 			$ionicPopup.alert({
					    title: errorInfo
					});
		 		}
			};
		})
		
	}
	//筛选条件
	var cityId=1930;
	$getArea.getArea(cityId,function(err,result){
		if(err){
			$ionicPopup.alert({
			    title: 'sorry，系统出错'
			});
		}else if(result && result.areaList.length !== 0){
			$scope.areaList=result.areaList;
			console.log($scope.areaList)
		}else{
			//处理没有区域的情况
		}
	})
	//根据筛选条件选择教练
	var top=20;
	$scope.coach.filterNone="default";
	var sort=$scope.coach.filterNone;
	$scope.coach.filterArea="999999";
	var areaId=$scope.coach.filterArea;
	$scope.coach.filterModel="1";
	var teachType=$scope.coach.filterModel;
	var index=0;
	var lat=$scope.coach.lat;
	var long=$scope.coach.long;
	$scope.$watchCollection("coach.filterArea",function(newValue,oldValue,$scope){
		if(newValue == oldValue){
			$fifterCoach.fifterCoach(areaId,cityId,index,lat,long,sort,teachType,top,function(err,result){
				if(err){
					$ionicPopup.alert({
					    title: 'sorry，系统出错'
					});
				}else if(result && result.coachList.length !== 0){
					$scope.coachShow = true;
					$scope.coachList=result.coachList;
				}else{
					$ionicPopup.alert({
					    title: 'sorry，没有您要找的教练'
					});
					$scope.coachShow = false;
				}
			})
		}else{
			var areaId=newValue;
			$fifterCoach.fifterCoach(areaId,cityId,index,lat,long,sort,teachType,top,function(err,result){
				if(err){
					$ionicPopup.alert({
					    title: 'sorry，系统出错'
					});
				}else if(result && result.coachList.length !== 0){
					$scope.coachShow = true;
					$scope.coachList=result.coachList;
				}else{
					$ionicPopup.alert({
					    title: 'sorry，没有您要找的教练'
					});
					$scope.coachShow = false;
				}
			})
		}
		
	})
	$scope.$watchCollection("coach.filterNone",function(newValue,oldValue,$scope){
		if(newValue !== oldValue){
			var sort=newValue;
			$fifterCoach.fifterCoach(areaId,cityId,index,lat,long,sort,teachType,top,function(err,result){
				if(err){
					$ionicPopup.alert({
					    title: 'sorry，系统出错'
					});
				}else if(result && result.coachList.length !== 0){
					$scope.coachShow = true;
					$scope.coachList=result.coachList;
				}else{
					$ionicPopup.alert({
					    title: 'sorry，没有您要找的教练'
					});
					$scope.coachShow = false;
				}
			})
		}
	})
	$scope.$watchCollection("coach.filterModel",function(newValue,oldValue,$scope){
		if(newValue !== oldValue){
			var teachType=newValue;
			$fifterCoach.fifterCoach(areaId,cityId,index,lat,long,sort,teachType,top,function(err,result){
				if(err){
					$ionicPopup.alert({
					    title: 'sorry，系统出错'
					});
				}else if(result && result.coachList.length !== 0){
					$scope.coachShow = true;
					$scope.coachList=result.coachList;
				}else{
					$ionicPopup.alert({
					    title: 'sorry，没有您要找的教练'
					});
					$scope.coachShow = false;
				}
			})
		}
	})
	//加载更多教练
	$scope.loadMore = function() {
	    $http.get('/basic/search/coach/filter',{
	    	params:{
	    		areaId:areaId,
	    		cityId:cityId,
	    		index:index+'1',
	    		lat:lat,
	    		long:long,
	    		sort:sort,
	    		teachType:teachType,
	    		top:top
	    	}
	    })
	    .success(function(result){
	    	$scope.coachList=result.coachList;
	      	$scope.$broadcast('scroll.infiniteScrollComplete');
	    });
	  };
	  $scope.$on('$stateChangeSuccess', function(){
	        $scope.loadMore();
	  });
})