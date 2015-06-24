require.config({

    baseUrl: "js/scripts",
    
	// alias libraries paths
    paths: {
        'ionic': '../lib/ionic/ionic.bundle.min',
        'angularAMD': '../lib/angular/angularAMD.min',
        'yja':'controllers/yja',
        'classTable':'controllers/classTable',
        'message':'controllers/message',
        'myself':'controllers/myself'
        // 'ngload': '../lib/requirejs/ngload',
        // 'ui-bootstrap': '../lib/angular-ui-bootstrap/ui-bootstrap-tpls',
        // 'prettify': '../lib/google-code-prettify/prettify',

        // 'HomeController': 'controller/home_ctrl',
        // 'MapController': 'controller/map_ctrl',
        // 'ModulesController': 'controller/modules_ctrl'
    },

    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angularAMD': ['ionic'],
        // 'angular-route': ['angular']
    },

    // kick start application
    deps: ['app']
});