angular.module("controllers.login",[])
.controller("login",function(
	$scope,
	$loginIn,
	$location
){
	$scope.login={phone:"",password:""};
	$scope.signIn=function(){
		var phone=$scope.login.phone,
			password=$scope.login.password;
		$loginIn.loginIn(phone,password,function(err,result){
			if(err){
				alert("sorry,访问出错");
			}else if(result && result.success == true){
				var emitInfo={name:result.name,role:result.role}
				// $scope.$emit("login",emitInfo);
				$location.path("/yja/classTable")
			}else if(result && result.success == false){
				var errorInfo=result.errorInfo;
				alert(errorInfo);
			}
		})
	}
})