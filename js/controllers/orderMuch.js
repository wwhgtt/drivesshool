angular.module("controllers.orderMuch",[])
.controller("orderMuch",function(
	$scope,
	$ionicPopup,
	$bindWx,
	$reload,
	$byDayCount,
	$orderTime,
	$orderDelete,
	$onBroad,
	$window
){
	$scope.user={id:""};


	$scope.getWeekDay = function(date){
		switch(date){
			case 1:
				week="周一";
				return week;
				break;
			case 2:
				week="周二";
				return week;
				break;
			case 3:
				week="周三";
				return week;
				break;
			case 4:
				week="周四";
				return week;
				break;
			case 5:
				week="周五";
				return week;
				break;
			case 6:
				week="周六";
				return week;
				break;
			case 7:
				week="周日";
				return week;
				break;
		}
	}
	$scope.orderList = [];
	var count=7;
	for(var current=0;current < count; current++){
		var todayArr = [{timeTemp:"Morning",time:"8:00~12:00"},{timeTemp:"Afternoon",time:"13:00~18:00"},{timeTemp:"Evening",time:"19:00~21:00"}];
		var orderTemp = {};
		var currentDay = moment().add(current,'days');
		var currentDayStr = currentDay.format("YYYY-MM-DD");
		orderTemp.date = currentDayStr;
		orderTemp.weekDay = $scope.getWeekDay(currentDay.isoWeekday());
		orderTemp.today = todayArr;
		$scope.orderList.push(orderTemp);
	}
	console.log("orderList",$scope.orderList);
	$reload.reload(function(err,result){
		if(err){
			alert("eror")
		}else{
			if (result && result.success == true) {
				$scope.user.id=result.userInfo.id+"";
				$byDayCount.byDayCount(count,function(err,result){
					if(err){
						$ionicPopup.alert({
							title:"sorry,系统出错"
						})
					}else{
						if(result && result.success == true){
							var orderList=result.orderList;
							orderList.forEach(function(order,index){
								var date=order.date;
								var time=order.time;
								var orderId=order.id;
								var poster=order.poster;
								var mold=order.mold;
								var count=order.count;
								var max=order.max;
								var type=order.type;
								var studentId=order.studentId+"";
								var timePieceTemp=order.timePiece;
								for(var index in $scope.orderList){
									var orderTemp = $scope.orderList[index];
									if(orderTemp.date == date){
										for(var index2 in orderTemp.today){
											var timeTemp=orderTemp["today"][index2].timeTemp;
											if(timeTemp == timePieceTemp){
												if(poster == "coach" && mold == "sendExam" ){
													var orderEle = orderTemp["today"][index2];
													orderEle.content = "送考"; //预约需要time，date
													orderEle.id = orderId;
												}else if(poster == "coach" && mold == "rest" ){
													var orderEle = orderTemp["today"][index2];
													orderEle.id = orderId;
													orderEle.content = "教练休息";
												}else if(poster == "coach" && mold == "subject3"){
													var orderEle = orderTemp["today"][index2];
													orderEle.max = "可约"+max+"人";
													orderEle.count = count;
													orderEle.id = orderId;
													orderEle.content = "科目三可约";
												}else{
													if(poster == "student" && $scope.user.id !== studentId){
														var orderEle = orderTemp["today"][index2];
														// orderEle.id = orderId;
														if(type == "sunject3"){
															//do nothing
														}else if(type == "record"){
															orderEle.content="已约"+count+"人";
															orderEle.count=count;
														}
													}else if(poster == "student" && $scope.user.id == studentId){
														var orderEle = orderTemp["today"][index2];
														orderEle.contentItem = "已预约";
														orderEle.id = orderId;
													}
												}
											}
										}
									}
								}
							})
						}else if (result && result.success == false){
							var errorInfo=result.errorInfo;
							$ionicPopup.alert({
								title:errorInfo
							})
						}
					}
				})
			}else if (result && result.success == false){
				var errorInfo=result.errorInfo;
				$ionicPopup.alert({
					title:errorInfo
				})
			}
		}
	})
	//预约
	$scope.forOrder=function(order,orderEle){
		var content=orderEle.content;
		var contentItem=orderEle.contentItem;
		if(contentItem !== "已预约" && content !== "教练休息" && content !== "送考"  ){
			var dateTemp=order.date;
			var dateCurrent=moment().format("YYYY-MM-DD");
			var date=moment(dateTemp).diff(dateCurrent,"days");
			var timeTemp=orderEle.timeTemp+"";
			var time;
			if(timeTemp == "Morning"){
				time=8;
			}else if(timeTemp == "Afternoon"){
				time=15;
			}else if(timeTemp == "Evening"){
				time=20;
			}
			var confirm=$ionicPopup.confirm({
				title:"您确定要预约该时段吗?"
			})
			confirm.then(function(result){
				if(result == true){
					$orderTime.orderTime(date,time,function(err,result){
						if (err) {
							$ionicPopup.alert({
								title:"sorry,系统出错"
							})
						}else{
							if(result && result.success == true){
								var orderID=result.order.id;
								var timePiece=result.order.timePiece;
								var type=result.order.type;
								// var time=result.order.time;
								var timeArray=$scope.orderList[date]["today"];
								console.log(timeArray)
								for(index in timeArray){
									var timeTemp=timeArray[index].timeTemp+"";
									if(timePiece == timeTemp){
										$scope.orderList[date]["today"][index].contentItem = "已预约";
										$scope.orderList[date]["today"][index].id=orderID;
										// if(type == "subject3"){
										$scope.orderList[date]["today"][index].count=$scope.orderList[date]["today"][index].count+1;
										// }
										break;
									}
								}
							}else if(result && result.errorInfo){
								var errorInfo=result.errorInfo;
								$ionicPopup.alert({
									title:errorInfo
								})
							}
						}
					})
				}else{
					//拒绝了约课
				}
			})
		}else if(contentItem == "已预约"){
			var confirm=$ionicPopup.confirm({
				title:"您要取消预约该时段吗?"
			})
			confirm.then(function(result){
				if(result == true){
					//取消预约，这块需要预约的ID
					var id=orderEle.id;
					$orderDelete.orderDelete(id,function(err,result){
						if (err) {
							$ionicPopup.alert({
								title:"sorry,系统出错"
							})
						}else{
							if(result && result.success==true){
								$ionicPopup.alert({
									title:"取消预约成功"
								});
								if(content == "科目三可约"){
									var dateTemp=order.date;
									var dateCurrent=moment().format("YYYY-MM-DD");
									var date=moment(dateTemp).diff(dateCurrent,"days");
									var timePiece=orderEle.timeTemp;
									orderEle.count=orderEle.count-1;
								}else{
									orderEle.content="";
								}
								orderEle.contentItem="";
							}else if(result && result.errorInfo){
								var errorInfo=result.errorInfo;
								$ionicPopup.alert({
									title:errorInfo
								});
							}
						}
					})
				}
			})
		}
	}
})