module.exports = function (grunt) {

	grunt.initConfig({
		concat: {
			// options: {
			//   separator: ';',
			// },
			js: {
			  src: [
				  'public/js/jquery.easing-1.3.min.js',
				  'public/js/ie-emulation-modes-warning.js',
				  'public/js/ie10-viewport-bug-workaround.js',
				  'public/js/owlcarousel/owl.carousel.min.js',
				  'public/js/owlcarousel/setting.js',
				  'public/js/totop/jquery.ui.totop.js',
				  'public/js/totop/setting.js',
				  'public/js/custom.js'
			  ],
			  dest: 'public/dist/charly.js',
			},
			css:{
				src: [
					'public/css/ie10-viewport-bug-workaround.css',
					'public/css/font-awesome.min.css',
					'public/css/overwrite.css',
					'public/css/owl.carousel.css',
					'public/css/owl.theme.css',
					'public/css/style.css',
					'public/css/rewardvpage.css'
				],
			  	dest: 'public/dist/charly.css',
			}
		},



		uglify: {
			chrome: {
				files: {
					'Extensions/chromestore/main.js': ['Extensions/chromestore/main-dev.js']
				}
			},
			js: {
				files: {
					'public/dist/charly.min.js': ['public/dist/charly.js']
				}
			}
		},

		cssmin: {
			options: {
				shorthandCompacting: false,
				// roundingPrecision: -1
			},
			target: {
				files: {
					'public/dist/charly.min.css': ['public/dist/charly.css']
				}
			}
		},



		csslint: {
		  strict: {
		    options: {
		      import: 2
		    },
		    src: ['public/dist/charly.css']
		  },
		  lax: {
		    options: {
		      import: false
		    },
		    src: ['public/dist/charly.css']
		  }
		},




		// uglify: {
		// 	options: {
		//       mangle: false,
		//       compress: true
		//     },
		// 	chrome: {
		// 		files: {
		// 			'Extensions/chromestore/main.js': ['Extensions/chromestore/main-dev.js']
		// 		}
		// 	}
		// },



		watch: {
			js: {
				files: ['public/js/**/*.js'],
				tasks: ['concat:js'],
			},
			css: {
				files: ['public/css/**/*.css'],
				tasks: ['concat:css'],
			},

			uglify: {
				files: ['public/dist/charly.js'],
				tasks: ['uglify:js'],
			},
			chrome:{
				files:['Extensions/chromestore/main-dev.js'],
				tasks:['uglify:chrome'],
			}

		},





	});


	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-csslint');

	grunt.registerTask('default', ['concat', 'uglify:js',  'watch']);

	grunt.registerTask('chrome', [ 'uglify:chrome', 'watch:chrome']);
};
