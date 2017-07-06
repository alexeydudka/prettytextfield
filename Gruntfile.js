module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    'prettytextfield/src/assembled.css': 'prettytextfield/src/prettytextfield.scss'
                }
            }
        },
        uglify: {
            options: {
                sourceMap: false,
                roundingPrecision: -1
            }, 
            js: {
                files: {          
                    'prettytextfield/src/prettytextfield.min.js': 'prettytextfield/src/prettytextfield.js',
                }
            }
        },

        cssmin: {
            options: {
                keepSpecialComments: false,
                shorthandCompacting: false,
                sourceMap: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'prettytextfield/src/prettytextfield.min.css': 'prettytextfield/src/assembled.css'
                }
            }
        },
        
        clean: {
            css: ['prettytextfield/src/assembled.css']
        },

        watch: {
            all: {
                files: ['prettytextfield/src/prettytextfield.scss', 'prettytextfield/src/prettytextfield.js'],
                tasks: ['update']
            }
        }
    });

    require('load-grunt-tasks')(grunt);
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('update', ['sass', 'cssmin', 'clean:css', 'uglify:js']);
    grunt.registerTask('watchall', ['watch:all']);
}