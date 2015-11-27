angular.module("controllers.searchCoach",[])
.controller("searchCoach",function(
	$scope,
	$ionicPopup,
	$getcoachList,
	$window
){
	$scope.coach={key:""};
	$scope.coachItem={sexImg:""}
	$(".coachInput").on("focus",function(){
		$(".searchCoach").css("display","none");
		$(".header").css("display","block");
		$(".coachType").focus();
	})
	var getQueryStr=function(studentId){
		var reg = new RegExp("(^|&)" + studentId + "=([^&]*)(&|$)", "i");
	    var r = window.location.search.replace(/\?/g, "&").substr(1).match(reg);
	    if (r != null){
	    	return (r[2]);
	    }else{
	    	return null;
	    } 
	}
	var studentid=getQueryStr("studentId");
	$(".anosearchButton").on("click",function(){
		var coachName=$scope.coach.key;
		if(coachName !== ""){
			//调后台接口
			$getcoachList.getcoachList(coachName,function(err,result){
				if(err){
					$ionicPopup.alert({
						title:"sorry,系统出错"
					})
				}else{
					if(result && result.result == true){
						if(!result.coachli){
							$ionicPopup.alert({
							    title: "sorry,没有找到该教练"
							});
						}else{
							$scope.coachShow=true; 
							$scope.coachList=result.coachli;
							var sex=$scope.coachList[0].Sex;
							if(sex == 1){
								$scope.coachItem.sexImg="http://party.idrv.com.cn/coachDetaile/img/icon_man.png";
							}else if(sex == 2){
								$scope.coachItem.sexImg="http://party.idrv.com.cn/coachDetaile/img/icon_woman.png";
							}
						}
					}else if(result && result.msg){
						var msg=result.msg;
						$ionicPopup.alert({
						    title:msg
						});
					}
				}
			})
		}else{
			$ionicPopup.alert({
				title:"请先输入教练姓名"
			})
		}
	})
	$scope.transition=function(coachId){
		$window.location.href="/yja/coachDetile/"+coachId+"?studentid="+studentid;
	}
})