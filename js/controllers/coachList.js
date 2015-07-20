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

	$scope.coach={key:"",lat:"",long:"",filterArea:"",filterNone:"",filterModel:"",url:""};
	var sUserAgent = navigator.userAgent.toLowerCase();
	if(sUserAgent.indexOf("ipad") !== -1 ||sUserAgent.indexOf("iphone") !== -1){
		$scope.coach.url = "http://wx.lja.so/";
	}else{
		$scope.coach.url=location.href.split("#")[0];
	}
	var url=$scope.coach.url;
	// alert(url);
	$getSignal.getSignal(url,function(err,result){
		if (err){
			$ionicPopup.alert({
			    title: "sorry,系统报错"
			});
		}else{
			if(result && result.success == true ){
				var timestamp=result.result.timestamp,
					nonceStr=result.result.noncestr;
					signature=result.result.signature;
				wx.config({
				    debug: false, 
				    appId: 'wx678c9951b011eabe', 
				    timestamp:timestamp, 
				    nonceStr: nonceStr,
				    signature:signature,
				    jsApiList: ["getLocation"] 
				});
				wx.getLocation({
				    type: 'wgs84',
				    success: function (res) {
				        $scope.coach.lat = res.latitude; 
				        $scope.coach.long = res.longitude; 
				        var speed = res.speed; 
				        var accuracy = res.accuracy; 
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
	$scope.search=function(){
		var key=$scope.coach.key;
		var lat=$scope.coach.lat,
			long=$scope.coach.long;
		if(lat=="" || long==""){
			lat="30.665534";
			long="104.071791";
			$getCoach.getCoach(key,lat,long,function(err,result){
				if (err) {
					$ionicPopup.alert({
					    title: "sorry,系统报错"
					});
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
			 		
			 		}
				};
			})
		}else{
			$getCoach.getCoach(key,lat,long,function(err,result){
				// alert(lat);
				if (err) {
					$ionicPopup.alert({
					    title: "sorry,系统报错"
					});
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

			 		}
				};
			})
		}
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
	if(lat==""||long==""){
		lat="30.665534";
		long="104.071791";
	}
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
					$scope.coachShow = false;
				}
			})
		}
	})
	//加载更多教练
	$scope.loadMore = function(index){
	    $http.get('/basic/search/coach/filter',{
	    	params:{
	    		areaId:areaId,
	    		cityId:cityId,
	    		index:index,
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
	  		index=index+1;
	        $scope.loadMore(index);
	  });
})