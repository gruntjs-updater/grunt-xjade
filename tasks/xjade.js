/*
 * grunt-xjade
 * https://github.com/dorny/grunt-xjade
 *
 * Copyright (c) 2014 Michal Dorner
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var xjade = require('xjade');


module.exports = function(grunt) {

  grunt.registerMultiTask('xjade', 'Compile XJade templates with grunt.', function() {

    var options = this.options({
      compile: 'js',
      doctype: '5',
      data: {},
      pretty: false,
      readFile: function(filepath) { return grunt.file.read(filepath); }
    });


    this.files.forEach(function(f) {

      var output = '';
      var error = false;

      f.src.forEach(function(filepath) {

        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return;
        }

        try {
          var compiled = xjade.compile(filepath, options);
          output += grunt.util.normalizelf(compiled);
        } catch (e) {
          grunt.log.warn('XJade failed to compile "' + filepath + '".');
          grunt.log.error(e);
          error = true;
        }

      });

      if (!error) {
        grunt.file.write(f.dest, output);
        grunt.log.writeln('File "' + f.dest + '" created.');
      }

    });
  });
};
