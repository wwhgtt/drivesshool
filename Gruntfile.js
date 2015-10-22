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
					'js/*.js',
					'js/*/*.js',
					'gruntOutPut/template/templates.js'
				],
				dest:'gruntOutPut/js/all.js'
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
					"gruntOutPut/js/all.min.js":["gruntOutPut/js/all.js"]
				}
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
			}
		}
	})
	grunt.loadNpmTasks('grunt-html2js');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-rename');

	grunt.registerTask('templateTask',['html2js:main']);
	grunt.registerTask('cssTask',['cssmin']);
	grunt.registerTask('jsConcatTask',['concat']);
	grunt.registerTask('copyTask',['copy']);
	grunt.registerTask('fontTask',['copy:font']);
	grunt.registerTask('imgTask',['copy:img']);
	grunt.registerTask('indexHtmlTask',['copy:index']);
	grunt.registerTask('fisTask',['copy:fis'])
	grunt.registerTask('default',['cssmin','templateTask','jsConcatTask','fontTask','imgTask','indexHtmlTask','fisTask']);
}




