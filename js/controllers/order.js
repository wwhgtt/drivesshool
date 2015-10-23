angular.module("controllers.orderTemp",[])
.controller("orderTemp",function(
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
		var morningArr = [{time:"8:00"},{time:"9:00"},{time:"10:00"},{time:"11:00"}];
		var afternoonArr = [{time:"13:00"},{time:"14:00"},{time:"15:00"},{time:"16:00"},{time:"17:00"}];
		var eveningArr = [{time:"19:00"},{time:"20:00"}];
		var orderTemp = {};
		var currentDay = moment().add(current,'days');
		var currentDayStr = currentDay.format("YYYY-MM-DD");
		orderTemp.date = currentDayStr;
		orderTemp.weekDay = $scope.getWeekDay(currentDay.isoWeekday());
		orderTemp.Morning = morningArr;
		orderTemp.Afternoon = afternoonArr;
		orderTemp.Evening = eveningArr;
		$scope.orderList.push(orderTemp);
	}
	console.log("orderList",$scope.orderList);
	$reload.reload(function(err,result){
		if(err){
			alert("sorry,系统出错")
		}else{
			if (result && result.success == true) {
				$scope.user.id=result.userInfo.id;
				$byDayCount.byDayCount(count,function(err,result){
					if(err){
						$ionicPopup.alert({title:"sorry,系统出错"})
					}else{
						if (result && result.success == true) {
							var orderList=result.orderList;
							orderList.forEach(function(order,index){
								//for循环，到$scope.orderList里去找对应的date和time的数据
								var date=order.date;
								var time=order.time;
								var orderId=order.id;
								var poster=order.poster;
								var mold=order.mold;
								var count=order.count;
								var type=order.type;
								var max=order.max;
								var studentId=order.studentId;
								var timePieceTemp=order.timePiece;
								var timePiece = "";
								if(time < 12)timePiece = "Morning";
								else if(time < 17)timePiece = "Afternoon";
								else if(time < 21)timePiece = "Evening";
								var timeStr = time + ":00";
								for(var index in $scope.orderList){
									var orderTemp = $scope.orderList[index];
									//相当于orderTemp== order
									if(orderTemp.date == date){
										for(var index2 in orderTemp[timePieceTemp]){
											if(poster == "coach" && mold == "sendExam"){
												var orderEle = orderTemp[timePieceTemp][index2];
												orderEle.content = "送考"; //预约需要time，date
												orderEle.id = orderId;
											}else if(poster == "coach" && mold == "rest" ){
												var orderEle = orderTemp[timePieceTemp][index2];
												orderEle.id = orderId;
												orderEle.content = "教练休息";
											}else if(poster == "coach" && mold == "subject3"){
												var orderEle = orderTemp[timePieceTemp][index2];
												orderEle.max = "可约"+max+"人";
												orderEle.count = count;
												orderEle.id = orderId;
												orderEle.content = "科目三可约";
											}else{
												if(poster == "student" && type == "subject3"  && $scope.user.id == studentId){
													var orderEle = orderTemp[timePieceTemp][index2];
													orderEle.contentItem = "已预约";
													orderEle.id = orderId;
												}else{
													var orderEle = orderTemp[timePieceTemp][index2];
													if(orderEle.time == timeStr){
														if(poster == "student" && $scope.user.id !== studentId){
															orderEle.id = orderId;
															orderEle.contentItem = "不可约";
														}else if(poster == "student" && $scope.user.id == studentId){
															orderEle.contentItem = "已预约";
															orderEle.id = orderId;
														}
													}	
												}
											}
										}
									}
								}
							})
						}else if(result && result.errorInfo){
							var errorInfo=result.errorInfo;
							$ionicPopup.alert({
								title:errorInfo
							})
						}
					}
				})
			}else{
				if (result && result.errorInfo){
					var errorInfo=result.errorInfo;
					$ionicPopup.alert({
						title:errorInfo
					})
				} 
			}
		}
	})
	
	$scope.forOrder=function(order,orderEle){
		var content=orderEle.content;
		var contentItem=orderEle.contentItem;
		if(contentItem !== "已预约" && content !== "教练休息" && contentItem !== "送考" && contentItem !== "不可约"){
			var dateTemp=order.date;
			var dateCurrent=moment().format("YYYY-MM-DD");
			var date=moment(dateTemp).diff(dateCurrent,"days");
			var timeTemp=orderEle.time+"";
			var timeItem=timeTemp.substr(0,2);
			var time;
			if(timeItem.indexOf(":") !== -1){
				time=timeItem.substr(0,1);
			}else{
				time=timeItem;
			}
			// var time=html.substr(0,2);
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
								var time=result.order.time;
								var type=result.order.type;
								var timeArray=$scope.orderList[date][timePiece];
								for(index in timeArray){
									var timeTemp=timeArray[index].time+"";
									var timeItem=timeTemp.substr(0,2);
									var timeStr;
									if(timeItem.indexOf(":") !== -1){
										timeStr=timeItem.substr(0,1);
									}else{
										timeStr=timeItem;
									}
									if(type == "subject3"){
										$scope.orderList[date][timePiece][index].contentItem = "已预约";
										$scope.orderList[date][timePiece][index].id=orderID;
										$scope.orderList[date][timePiece][index].count=$scope.orderList[date][timePiece][index].count+1;
										break;
									}else{
										if(time == timeStr){
											$scope.orderList[date][timePiece][index].contentItem = "已预约";
											$scope.orderList[date][timePiece][index].id=orderID;
											break;
										}
									}
								}
								// $window.location.reload();
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
								}).then(function(result){
									if(result == true){
										if(content == "科目三可约"){
											orderEle.count=orderEle.count-1;
											$window.location.reload();
										}
										orderEle.contentItem="";
									}
								})
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