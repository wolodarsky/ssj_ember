module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      myTask: {
        options: {
          sizes: [{
            name: 'small',
            width: 640,
            quality: 60
          },{
            name: 'medium',
            width: 1024,
            quality: 60
          },{
            name: 'large',
            width: 2000,
            quality: 60
          }]
        },
        files: [{
          expand: true,
          src: ['**/*.jpg'],
          cwd: 'public/assets/img/galleries/spring-2015',
          // dest: 'public/assets/img/galleries/spring-2015/<%= path %>/<%= name %>'
          dest: 'public/assets/img/galleries/spring-2015/<%= name %>'
        }]
      }
    },
  });
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

}
