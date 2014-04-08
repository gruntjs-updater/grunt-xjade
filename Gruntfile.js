/*
 * grunt-xjade
 * https://github.com/dorny/grunt-xjade
 *
 * Copyright (c) 2014 Michal Dorner
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        'test/*.js',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    clean: ['test/tmp'],

    xjade: {

      options: {
        compile: 'js'
      },

      index: {
        src: 'test/fixtures/index.xjade',
        dest: 'test/tmp/index.html',
        options: {
          compile: 'html',
          pretty: true,
          doctype: '5'
        }
      },

      client: {
        src: 'test/fixtures/client.xjade',
        dest: 'test/tmp/client.js',
      },

      expand: {
        files: [{
          expand: true,
          flatten: true,
          src: 'test/fixtures/expand*.xjade',
          dest: 'test/tmp',
          ext: '.js',
        }]
      },

      concat: {
        src: 'test/fixtures/expand*.xjade',
        dest: 'test/tmp/concat.js',
      },

    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'xjade', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
