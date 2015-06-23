var environment = 'dev';//开发状态是dev,发布状态是release
if(environment === 'dev'){
	window.BASE_URL = '/dev';
}else if(environment === 'release'){
	window.BASE_URL = "";
}else{
	window.BASE_URL = "";
}