module.exports = function(grunt) {

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-compass");
  grunt.loadNpmTasks("grunt-contrib-jade");

  //grunt.loadNpmTasks("matchdep");


  grunt.initConfig({
    
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
    }
  }); // initConfig
  
  grunt.registerTask('default', ['watch']);

}; // exports

