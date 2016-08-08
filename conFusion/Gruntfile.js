'use strict';

module.exports = function(grunt) {
  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);
  // Automatically load required Grunt tasks
  require('jit-grunt')(grunt, {
      useminPrepare: 'grunt-usemin'
  });

  // Define the configuration for all the tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      copy: {
        files: ['app/**', '!app/**/*.css', '!app/**/*.js'],
        tasks: ['build']
      },
      scripts: {
        files: ['app/scripts/app.js'],
        tasks: ['build']
      },
      styles: {
        files: ['app/styles/mystyles.css'],
        tasks: ['build']
      },
      livereload: {
        options: {
            livereload: '<%= connect.options.livereload %>'
        },
        files: [
            'app/{,*/}*.html',
            '.tmp/styles/{,*/}*.css',
            'app/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      dist: {
        options: {
          open: true,
          base: {
            path: 'dist',
            options: {
              index: 'menu.html',
              maxAge: 300000
            }
          }
        }
      }
    },
    // Make sure code styles are up to par and there are no obvious mistakes
    /** Se encarga de verificador que los archivos cumplan con los estandares de
        codigo de javaScript para asi generar el reporte de errores y advertencias,
        y en el archivo .jshintrc se agregan las reglas
        https://gist.github.com/connor/1597131
     **/
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          'app/scripts/{,*/}*.js'
        ]
      }
    },
    /** Se encarga de copiar los archivos a una carpeta llamada dist, ya que
        hay modulos que modificaran estos archivos al correr el grunt.
    **/
    copy: {
      dist: {
        cwd: 'app',
        src: ['**', '!styles/**/*.css', '!scripts/**/*.js'],
        dest: 'dist',
        expand: true
      },
      fonts: {
        files: [{
          //for bootstrap fonts
          expand: true,
          dot: true,
          cwd: 'bower_components/bootstrap/dist',
          src: ['fonts/*.*'],
          dest: 'dist'
      }, {
          //for font-awesome
          expand: true,
          dot: true,
          cwd: 'bower_components/font-awesome',
          src: ['fonts/*.*'],
          dest: 'dist'
        }]
      }
    },
    // limpia toda la carpeta dist al correr el grunt
    clean: {
      build: {
        src: ['dist/']
      }
    },
    useminPrepare: {
      html: 'app/menu.html',
      options: {
        dest: 'dist'
      }
    },
    // Concatena todo por el separador
    concat: {
      options: {
        separator: ';'
      },
      // dist configuration is provided by useminPrepare
      dist: {}
    },
    // Uglify
    /** Se encarga de minificar los js, osea eliminar espacios, saltos,
        sangrias y/o renombrar variables muy grandes.
    **/
    uglify: {
      // dist configuration is provided by useminPrepare
      dist: {}
    },
    /** Se encarga de minificar los css, osea eliminar espacios, saltos,
        sangrias y/o renombrar variables muy grandes.
    **/
    cssmin: {
      dist: {}
    },
    // Filerev
    filerev: {
      options: {
        encoding: 'utf8',
        algorithm: 'md5',
        length: 20
      },
      release: {
        // filerev:release hashes(md5) all assets (images, js and css )
        // in dist directory
        files: [{
          src: [
            'dist/scripts/*.js',
            'dist/styles/*.css',
          ]
        }]
      }
    },
    // Usemin
    // Replaces all assets with their revved version in html and css files.
    // options.assetDirs contains the directories for finding the assets
    // according to their relative paths
    usemin: {
      html: ['dist/*.html'],
      css: ['dist/styles/*.css'],
      options: {
        assetsDirs: ['dist', 'dist/styles']
      }
    }
  });

 //En el orden que aparcen se aplican las tareas
  grunt.registerTask('build', [
    'clean',
    'jshint',
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    'copy',
    'filerev',
    'usemin'
  ]);

  grunt.registerTask('default', ['build']);
  grunt.registerTask('serve', ['build', 'connect:dist', 'watch']);

};
