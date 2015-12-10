/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        copy: {
            main: {
                // Grunt will search for "**/*.js" under "lib/" when the "uglify" task
                // runs and build the appropriate src-dest file mappings then, so you
                // don't need to update the Gruntfile when files are added or removed.
                files: [{
                        expand: true,
                        cwd: 'bower_components/font-awesome/',
                        src: ['fonts/*.**', 'css/font-awesome.css'],
                        dest: 'dist/',
                        extDot: 'first'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap/dist/',
                        src: ['css/bootstrap.css', 'js/bootstrap.js'],
                        dest: 'dist/',
                        extDot: 'first'
                    },
                    {
                        src: 'bower_components/jquery/dist/jquery.js',
                        dest: 'dist/js/jquery.js'
                    },
                    {
                        src: ['css/main.css', 'js/main.js', 'index.html'],
                        dest: 'dist/'
                    }
                       ]
            },
        },
        concat: {
            scripts: {
                src: ['dist/js/jquery.js', 'dist/js/bootstrap.js', 'dist/js/main.js'],
                dest: 'dist/js/concat.js'
            },
            cssFiles: {
                src: ['dist/css/bootstrap.css', 'dist/css/font-awesome.css', 'dist/css/main.css'],
                dest: 'dist/css/concat.css'
            }
        },
        uglify: {
            options: {
                stripBanners: true
            },
            dist: {
                src: ['dist/js/concat.js'],
                dest: 'dist/js/main.min.js'
            }
        },
        cssmin: {
            dist: {
                src: ['dist/css/concat.css'],
                dest: 'dist/css/main.min.css'
            }
        },
        clean: {
            css: ["dist/css/*.css", "!dist/css/*.min.css"],
            js: ["dist/js/*.js", "!dist/js/*.min.js"],
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Default task.
    grunt.registerTask('default', ['copy', 'concat', 'uglify', 'cssmin', 'clean']);
};