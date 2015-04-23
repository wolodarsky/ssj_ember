module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      myTask: {
        options: {
          sizes: [{
            name: 'small',
            width: 640,
            quality: 75
          },{
            name: 'medium',
            width: 1024,
            quality: 75
          },{
            name: 'large',
            width: 2000,
            quality: 75
          }]
        },
        files: [{
          expand: true,
          src: ['**/*.jpg'],
          cwd: 'public/assets/img/originals',
          dest: 'public/assets/img/galleries'
        }]
      }
    },
  });
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

}
