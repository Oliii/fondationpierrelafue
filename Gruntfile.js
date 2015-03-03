module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      production: {
        options: {
          paths: ["assets/css"]
        },
        files: {
          "public/stylesheets/style.css": "public/less/style.less"
        }
      }
    },
    watch: {
      files: ['public/less/style.less', 'public/less/fondation.less', 'public/less/foyer.less', 'public/less/common.less'],
      tasks: ['less']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less', 'watch']);

};