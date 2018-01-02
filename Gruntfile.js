module.exports = function(grunt) {

    grunt.initConfig({
        jshint:{
            build:['Gruntfile.js','js/index.js'],
            options:{
                jshintrc:'.jshintrc'
            }
        },
        uglify:{
            options: {
                stripBanners:true,
                // banner:'/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src:'js/index.js',
                dest:'build/index.min.js'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: 'index.css',
                    dest: 'build',
                    ext: '.min.css'
                }]
            }
        }
        // watch: {
        //     files: ['<%= jshint.files %>'],
        //     tasks: ['jshint']
        // }
    });
    //
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default',['cssmin','uglify']);

};