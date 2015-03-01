module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      production: {
        options: {
          paths: ["assets/css"]
        },
        files: {
          "public/stylesheets/style.css": "public/less/style.less",
          "public/stylesheets/accueil.css": "public/less/accueil.less"
        }
      }
    },
    watch: {
      files: ['public/less/style.less', 'public/less/accueil.less'],
      tasks: ['less']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less', 'watch']);

};