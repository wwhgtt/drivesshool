angular.module("directives.todayOrder",[])
.directive("todayOrder",function(
	$orderTime,
	$ionicPopup
){
	return {
		restrict:"A",
		link:function($scope,element,attr){
			var ele=$(element[0]);
			var tdValue=ele.find(".dateModel");
			console.log(tdValue.html());
			ele.on("click","td",function(){
				var html=$(this).html()+"";
				var time=html.substr(0,2);
				var date=0;
				$orderTime.orderTime(date,time,function(err,result){
					if (err) {
						$ionicPopup.alert({
							title:"sorry,系统出错"
						})
					}else{
						if(result && result.success == true){

						}else if(result && result.errorInfo){
							var errorInfo=result.errorInfo;
							$ionicPopup.alert({
								title:errorInfo
							})
						}
					}
				})
			})
		}
	}
})