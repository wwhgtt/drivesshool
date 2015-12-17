angular.module("directives.coachList",[])
.directive("coachList",function(
	$timeout
){
	return {
		restrict:"E",
		templateUrl:"template/coach.html",
		link:function($scope,element,attr){
			
		}
	}
})
.directive("imageHeight",function(
	$timeout
){
	return {
		restrict:"A",
		link:function($scope,element,attr){
			var image=$(element[0]).find(".hideImage");
            $timeout(function(){
            	image.css({
            		"display":"block",
					"top":($(window).height()-image.height())/2
            	})
            	console.log(image.height())
            },100)
		}
	}
})
.directive("orderMuch",function(

){
	return {
		restrict:"E",
		templateUrl:"template/orderMuch.html",
		link:function($scope,element,attr){
			
		}
	}
})
.directive("forClick",function(
	
){
	return {
		restrict:"A",
		link:function($scope,element,attr){
			var ele=$(element[0]).find("dd");//ele是一个数组
			// FastClick.attach(element);
			$(ele[0]).on("click",function(){
				$(ele[0]).addClass("activeTemp");
				$(ele[1]).removeClass("activeTemp");
				$(ele[2]).removeClass("activeTemp");
			})
			$(ele[1]).on("click",function(){
				$(ele[1]).addClass("activeTemp");
				$(ele[0]).removeClass("activeTemp");
				$(ele[2]).removeClass("activeTemp");
			})
			$(ele[2]).on("click",function(){
				$(ele[2]).addClass("activeTemp");
				$(ele[0]).removeClass("activeTemp");
				$(ele[1]).removeClass("activeTemp");
			})
		}
	}
})