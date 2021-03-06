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
				dest:'gruntOutPut/template/templates.js'
			}
		},
		cssmin:{
			combine:{
				files:{
					'gruntOutPut/css/bootstrap/all.min.css':[
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
					'gruntOutPut/jsTemp/*.js',
					'gruntOutPut/jsTemp/*/*.js',
					'gruntOutPut/template/templates.js'
				],
				dest:'gruntOutPut/js/all.js'
			}
		},
		copy:{
			font:{
				files:[
					{expand: true, src: ['css/fonts/*'], dest: 'gruntOutPut/css/fonts/',filter: 'isFile',flatten:true}
				]
			},
			img:{
				files:[
					{expand: true, src: ['img/**'], dest: 'gruntOutPut/img/',filter: 'isFile',flatten:true}
				]
			},
			index:{
				files:[
					{expand: false, src: ['indexRelease.html'], dest: 'gruntOutPut/index.html',filter: 'isFile',flatten:true}
				]
			},
			fis:{
				files:[
					{expand: false, src: ['fis-conf.js'], dest: 'gruntOutPut/fis-conf.js',filter: 'isFile',flatten:true}
				]
			},
			js:{
				files:[
					{expand: true, cwd:"js", src: ['**'], dest: 'gruntOutPut/jsTemp/',flatten:false}
				]
			},
			systemConfig:{
				files:[
					{expand: false, src: ['systemConfigRelease.js'], dest: 'gruntOutPut/jsTemp/systemConfig.js',filter: 'isFile',flatten:true}
				]
			},
			release:{
				files:[
					{expand: true, cwd:"gruntOutPut/production/", src: ['css/**'], dest: 'production/',flatten:false},
					{expand: true, cwd:"gruntOutPut/production/", src: ['img/**'], dest: 'production/',flatten:false},
					{expand: true, src: ['gruntOutPut/production/js/all_*.js'], dest: 'production/js/',flatten:true},
					{expand: true, cwd:"gruntOutPut/production/", src: ['index.html'], dest: 'production/',flatten:false}
				]
			}
		},
		replace:{
			appJs:{
				options:{
					patterns:[
						{
							match:"//_TEMPLATES-MAIN_",
							replacement:'"templates-main"'
						}
					],
					prefix:""
				},
				files: [
					{src: ['js/app.js'], dest: 'gruntOutPut/jsTemp/app.js',expand: false, flatten: true}
			    ]
			}
		}
	})
	grunt.loadNpmTasks('grunt-html2js');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-rename');
	grunt.loadNpmTasks('grunt-replace');

	grunt.registerTask('templateTask',['html2js:main']);
	grunt.registerTask('cssTask',['cssmin']);
	grunt.registerTask('jsConcatTask',['concat']);
	grunt.registerTask('copyTask',['copy']);
	grunt.registerTask('fontTask',['copy:font']);
	grunt.registerTask('imgTask',['copy:img']);
	grunt.registerTask('indexHtmlTask',['copy:index']);
	grunt.registerTask('fisTask',['copy:fis']);
	grunt.registerTask('appJsTask',['replace:appJs']);//替换app.js里的部分代码
	grunt.registerTask('jsTask',['copy:js','copy:systemConfig']);
	grunt.registerTask('default',['cssmin','templateTask','jsTask','appJsTask','jsConcatTask','fontTask','imgTask','indexHtmlTask','fisTask']);

	grunt.registerTask('copyRelease',['copy:release']);
}
