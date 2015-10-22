module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		html2js:{
			options:{
				base:'.',
				singleModule: true,
				useStrict: true
			},
			main:{
				src:['template/*.html'],
				dest:'gruntoutput/template/templates.js'
			}
		},
		cssmin:{
			combine:{
				files:{
					'gruntoutput/css/all.min.css':[
						"css/*.css",
						"css/*/*.css"
					]
				}
			}
		},
		concat:{
			dist:{
				src:[
					'lib/*.js',
					'js/*.js',
					'js/*/*.js',
					'gruntoutput/template/templates.js'
				],
				dest:'gruntoutput/js/all.js'
			}
		},
		uglify:{
			main:{
				options:{
					compress:{
						drop_console:true
					}
				},
				files:{
					"gruntoutput/js/all.min.js":["gruntoutput/js/all.js"]
				}
			}
		},
		copy:{
			main:{
				files:[
					{expand: false, src: ['www/js/all.min.js'], dest: '/Users/apple/Desktop/rishiqingAppUpdateServer/res/js/all.min.js',filter: 'isFile'},
					{expand: false, src: ['www/css/all.min.css'], dest:'/Users/apple/Desktop/rishiqingAppUpdateServer/res/css/all.min.css',filter:'isFile'}
				]
			}
		}
	})
	grunt.loadNpmTasks('grunt-html2js');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('templateTask',['html2js:main']);
	grunt.registerTask('cssTask',['cssmin']);
	grunt.registerTask('jsConcatTask',['concat']);
	grunt.registerTask('copyTask',['copy'])
	grunt.registerTask('default',['cssmin','templateTask','jsConcatTask']);
}




