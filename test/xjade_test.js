'use strict';

var grunt = require('grunt');

exports.xjade = {

  index: function(test) {
    test.expect(1);
    var actual = grunt.file.read('test/tmp/index.html');
    var expected = grunt.file.read('test/expected/index.html');
    test.equal(actual, expected, 'should compile index.xjade to index.html');
    test.done();
  },

  client: function(test) {
    test.expect(1);
    var actual = grunt.file.read('test/tmp/client.js');
    var expected = grunt.file.read('test/expected/client.js');
    test.equal(actual, expected, 'should compile client.xjade to client.js');
    test.done();
  },

  expand: function(test) {
    test.expect(2);
    var actual1 = grunt.file.read('test/tmp/expand-1.js');
    var expected1 = grunt.file.read('test/expected/expand-1.js');
    test.equal(actual1, expected1, 'should compile expand-1.xjade to expand-1.js');

    var actual2 = grunt.file.read('test/tmp/expand-2.js');
    var expected2 = grunt.file.read('test/expected/expand-2.js');
    test.equal(actual2, expected2, 'should compile expand-2.xjade to expand-2.js');
    test.done();
  },

  concat: function(test) {
    test.expect(1);
    var actual = grunt.file.read('test/tmp/concat.js');
    var expected = grunt.file.read('test/expected/concat.js');
    test.equal(actual, expected, 'should compile expand-1.xjade and expand-2.xjade to concat.js');
    test.done();
  },
};
