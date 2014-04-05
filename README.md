# grunt-xjade

Compile [XJade](https://github.com/dorny/xjade) templates with grunt.

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-xjade --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-xjade');
```

## The "XJade" task
_Run this task with the `grunt xjade` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.
XJade specific options are described below.
For more information about XJade Template Language visit project homepage: (https://github.com/dorny/xjade).

### Options

#### compile
Type: `String`  
Default: **js**

Sets the XJade compiler option:  
* `js` - generate JavaScript code  
* `html` - generate HTML from in-memory compiled & executed template\(s\)  


#### data
Type: `Any`

Sets the data passed to executed template as argument.


#### doctype
Type: `String`  
Default: **5**

Sets the doctype for generated HTML.  
Doctype can be any string or shortcut:  `'5'`, `'strict'`, `'transitional'`, `'xhtml'`.


#### pretty
Type: `Boolean`  
Default: **false**

Output indented HTML.

### Usage Examples

Generate index.html from our root tempate:

```js
grunt.initConfig({
  index: {
    src: 'index.js-tpl',
    dest: 'index.html',
    options: {
      compile: 'html',
      data: { sitename:"XJade Example"}
      pretty: true,
      doctype: '5'
    }
  },
});
```

Compile all templates inside "tpl" directories to standard JavaScript code for browser usage:

```js
grunt.initConfig({
  client: {
    options: {
      compile: 'js'
    },
    files: [{
      expand: true,
      src: 'views/tpl/*.js-tpl',
      ext: '.js',
    }]
  },
});
```

Compile and concat all templates inside "templates" directory:

```js
grunt.initConfig({
  templates: {
    src: 'src/templates/*.js-tpl',
    dest: 'www/templates.js',
    options: {
      compile: 'js',
    }
  },
});
```
