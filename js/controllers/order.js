angular.module("controllers.order",[])
.controller("order",function(
	$scope,
	$byDayCount,
	$reload,
	$ionicPopup,
	$state,
	$order,
	$cancelorder,
	$window
){
	$scope.orderList = [{time:"07:00"},{time:"08:00"},{time:"09:00"},{time:"10:00"},
	{time:"11:00"},{time:"12:00"},{time:"13:00"},{time:"14:00"},{time:"15:00"},{time:"16:00"},{time:"17:00"},{time:"18:00"}];
	// console.log("orderList",$scope.orderList);
	$scope.moment={today:moment().format("YYYY-MM"),second:moment().add(1,"days").format("YYYY-MM"),third:moment().add(2,"days").format("YYYY-MM"),
	one:moment().format("DD"),two:moment().add(1,"days").format("DD"),three:moment().add(2,"days").format("DD")};
	$reload.reload(function(err,result){
		if(err){
			$ionicPopup.alert({
				title:"sorry,系统出错"
			})
		}else{
			if(result && result.result == true){
				var student=result.student;
				var CoachId=student.CoachId;
				var studentId=student.Id;
				if(CoachId !== "" && CoachId !== 0){
					var date=moment().format("YYYY-MM-DD");
					$byDayCount.byDayCount(date,studentId,function(err,result){
						if(err){
							$ionicPopup.alert({
								title:"sorry,系统出错"
							})
						}else{
							if(result && result.result == true && result.schli !== null){
								var orderList=result.schli;
								orderList.forEach(function(order,index){
									var dateTempItem=(order.Datetime+"").substr(0,5);
									var orderId=order.ID;
									var max=order.Max;
									var type=order.Subject;
									var Orderstatus=order.Orderstatus;
									var Number=order.Number;
									for(var index in $scope.orderList){
										var orderTemp = $scope.orderList[index];
										if(orderTemp.time == dateTempItem){
											orderTemp.Id= orderId;
											if( type == 2){
												orderTemp.content= "科目二"
											}else{
												orderTemp.content= "科目三"
											}
											orderTemp.number=Number;
											orderTemp.Max=max;
											orderTemp.Orderstatus=Orderstatus;
										}
									}
								})
							}else if (result && result.result == false){
								var errorInfo=result.msg;
								$ionicPopup.alert({
									title:errorInfo
								})
							}
						}
					})
				}else{
					$ionicPopup.confirm({
						title:"您还没有绑定教练,点击OK前往绑定"
					}).then(function(result){
						if(result == true){
							$window.location.href="/yja/searchCoach?studentId="+studentId;
						}
					})
				}
			}else{
				$window.location.href="/yja/register?judgeMent=judgeMent";
			}
		}
	})
	var studentId=$state.params.studentId;
	$scope.forOrder=function(order){
		var id=order.Id;
		var Orderstatus=order.Orderstatus;
		if(!id && !Orderstatus){
			//证明没有排课
		}else if(Orderstatus !== 1){
			$ionicPopup.confirm({
				title:"是否预约该时段课程?",
				cancelText: '取消',
				okText: '确定'
			}).then(function(result){
				if(result == true){
					$order.order(studentId,id,function(err,result){
						if(err){
							$ionicPopup.alert({
								title:"sorry,系统出错"
							})
						}else{
							if(result && result.result == true){
								
								order.number= order.number + 1;
								order.Orderstatus = 1;
							}
						}
					})
				}
			})
		}else if(Orderstatus == 1){
			$ionicPopup.confirm({
				title:"是否取消预约该时段课程?",
				cancelText: '取消',
				okText: '确定'
			}).then(function(result){
				if(result == true){
					$cancelorder.cancelorder(studentId,id,function(err,result){
						if(err){
							$ionicPopup.alert({
								title:"sorry,系统出错"
							})
						}else{
							if(result && result.result == true){
								
								order.number= order.number - 1;
								order.Orderstatus = 2;
							}
						}
					})
				}
			})
		}
	}
	$scope.takeOrder=function(mom){
		var momentTemp;
		if(mom == moment().format("DD")){
			momentTemp=moment().format("YYYY-MM-DD");
		}else if(mom == moment().add(1,"days").format("DD")){
			momentTemp=moment().add(1,"days").format("YYYY-MM-DD");
		}else{
			momentTemp=moment().add(2,"days").format("YYYY-MM-DD");
		}
		for(var index in $scope.orderList){
			var orderTemp = $scope.orderList[index];
			orderTemp.content = "";
		}
		$byDayCount.byDayCount(momentTemp,studentId,function(err,result){
			if(err){
				$ionicPopup.alert({
					title:"sorry,系统出错"
				})
			}else{
				if(result && result.result == true && result.schli !== null){
					var orderList=result.schli;
					orderList.forEach(function(order,index){
						var dateTempItem=(order.Datetime+"").substr(0,5);
						var orderId=order.ID;
						var max=order.Max;
						var type=order.Subject;
						var Orderstatus=order.Orderstatus;
						var Number=order.Number;
						for(var index in $scope.orderList){
							var orderTemp = $scope.orderList[index];
							if(orderTemp.time == dateTempItem){
								orderTemp.Id= orderId;
								if( type == 2){
									orderTemp.content= "科目二"
								}else{
									orderTemp.content= "科目三"
								}
								orderTemp.number=Number;
								orderTemp.Max=max;
								orderTemp.Orderstatus=Orderstatus;
							}
						}
					})
				}else if (result && result.result == false){
					var errorInfo=result.msg;
					$ionicPopup.alert({
						title:errorInfo
					})
				}
			}
		})
	}
})