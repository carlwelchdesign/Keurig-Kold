module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        buildRoot: '../',
        revision: 0, // updated via gitsvn:info task

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'library/js/**/*.js',
                '!library/**/vendor/**/*.js',
                '!library/js/app.js'//,
                //'!library/js/kold/kold_landing.js'
            ]
        },
        watch: {
            // js: {
            //     files: ['<%= jshint.files %>'],
            //     tasks: ['jshint']
            //     //tasks: ['jshint', 'qunit']
            // },
            scss: {
                files: [ 'library/scss/**/*.scss' ],
                tasks: [ 'sassDev' ]
            }
        }
    });
    
    grunt.config( 'clean', {
        options: {
            force: true
        },
        css: [
            'library/css/',
            'library/css/**/index.css',
            'library/css/**/*/index.css',
            'library/css/**/index-full.css',
            'library/css/**/*/index-full.css'
        ]
    });

    grunt.config( 'sass', {
        options: {
            includePaths: ['bower_components/foundation/scss'],
            sourcemap: 'inline',
            style: 'expanded',
            lineNumbers: true,
            precision: 5
        },
        files: {
            expand: true,
            cwd: 'library',
            src: [
                '**/index.scss',
                '**/app.scss',
                '**/index-full.scss',
                '**/app-full.scss'
            ],
            dest: 'library',
            ext: '.css',
        
            // Set the destination to a directory named "sapient"
            rename: function( dest, src ) {
            
                var path = require( 'path' )
                    , splitDirs = src.split( '/' )
                    ;

                splitDirs[ splitDirs.indexOf( 'scss' ) ] = 'css';

                return path.join( dest, splitDirs.join( '/' ) );
            }
        }
    });

    grunt.config( 'githooks', {
        all: {
            'pre-commit': 'jshint',
        }
    });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean' );
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-githooks' );

  //grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['watch']);
  /* Task aliases */
  grunt.registerTask( 'sassDev', 'Build to compile Less files during development.', [
      'clean:css',
      'sass'
  ]);
}
