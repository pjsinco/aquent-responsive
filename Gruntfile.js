module.exports = function(grunt) {

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-compass");
  grunt.loadNpmTasks("grunt-contrib-jade");
  grunt.loadNpmTasks("grunt-autoprefixer");
  //grunt.loadNpmTasks("grunt-contrib-uglify");
  //grunt.loadNpmTasks("matchdep");


  grunt.initConfig({

    //uglify: {
      //dist: {
        //files: {
          //'_/js/script.js': ['_/components/js/*.js']
        //} 
      //}
    //},
    
    autoprefixer: {
      dist: {
        '_css/styles.css': '_/css/styles.css'
      }
    },

    compass: {
      dev: {
        options: {
          config: 'config.rb'
        }
      }
    },

    jade: {
      compile: {
        options: {
          pretty: true,
        },
        files: [{
          expand: true,
          cwd: '_/components/jade/',
          src: '**/*.jade',
          dest: '.',
          ext: '.html'
        }]
      }
    },

    watch: {
      options: {
        livereload: true
      },
      
      sass: {
        files: ['_/components/sass/**/*.scss'],
        tasks: ['compass:dev'] 
      },

      compileHtml: {
        files: ['_/components/jade/*.jade'],
        tasks: ['jade']
      },
    
      styles: {
        files: ['_/components/css/*.css'],
        tasks: ['autoprefixer']
      }
    
      //scripts: {
        //files: ['_/components/js/*.js'],
        //tasks: ['uglify']
      //}
    }
  }); // initConfig
  
  grunt.registerTask('default', ['watch']);

}; // exports

