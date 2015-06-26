angular.module("controllers.password",[])
.controller("password",function(
	$scope,
	$passwordBack,
	$location
){
	$scope.password={phone:"",check:""};
	$scope.passwordIn=function(){
		var phone=$scope.password.phone,
			check=$scope.password.check;
		$passwordBack.passwordBack(phone,check,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else if(result && result.success == true){
				
			}else if(result && result.success == false){
				var errorInfo=result.errorInfo;
				alert(errorInfo);
			}
		})
	}
	$scope.Message=function(){
		console.log("sknach");
	}
})