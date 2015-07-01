angular.module("controllers.classTable",[])
.controller("classTable",function(
	$scope
){
	$scope.week={today:"",toone:"",totwo:"",tothree:"",tolast:"",tolastone:"",tolasttwo:"",
	Nulasttwo:"",Nulastone:"",Nulast:"",Nuday:"",Nuone:"",Nutwo:"",Nuthree:"",month:""};
	var translate=function(n){
		switch (n)
		{
			case 0:
			  x="周日";
			  return x;
			  break;
			case 1:
			  x="周一";
			  return x;
			  break;
			case 2:
			  x="周二";
			  return x;
			  break;
			case 3:
			  x="周三";
			  return x;
			  break;
			case 4:
			  x="周四";
			  return x;
			  break;
			case 5:
			  x="周五";
			  return x;
			  break;
			case 6:
			  x="周六";
			  return x;
			  break;
		}
	}
	$scope.week.today=translate(parseInt(moment().format('d')));
	$scope.week.toone=translate(parseInt(moment().add('days',1).format('d')));
	$scope.week.totwo=translate(parseInt(moment().add('days',2).format('d')));
	$scope.week.tothree=translate(parseInt(moment().add('days',3).format('d')));
	$scope.week.tolast=translate(parseInt(moment().subtract(1, 'days').format('d')));
	$scope.week.tolastone=translate(parseInt(moment().subtract(2, 'days').format('d')));
	$scope.week.tolasttwo=translate(parseInt(moment().subtract(3, 'days').format('d')));
	$scope.week.Nuday=moment().format('MM-DD');
	$scope.week.Nulast=moment().subtract(1,'days').format('MM-DD');
	$scope.week.Nulastone=moment().subtract(2,'days').format('MM-DD');
	$scope.week.Nulasttwo=moment().subtract(3,'days').format('MM-DD');
	$scope.week.Nuone=moment().add('days',1).format('MM-DD');
	$scope.week.Nutwo=moment().add('days',2).format('MM-DD');
	$scope.week.Nuthree=moment().add('days',3).format('MM-DD');
	$scope.week.month=moment().format('M')+'月';
})