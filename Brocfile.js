/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({

  vendorFiles: {
    'handlebars.js': null
  },

  'ember-cli-foundation-sass': {
    'foundationJs': ['offcanvas']
  },

  fingerprint: {
    extensions: ['js', 'css', 'png', 'jpg', 'gif', 'svg', 'ttf', 'woff', 'eot'],
    prepend: 'https://s3.amazonaws.com/ssj-bucket/'
  }
});

// Use `app.import` to add additional libraries to the generated
// output files.
app.import('bower_components/slick.js/slick/slick.js');
app.import('bower_components/slick.js/slick/slick.css');
app.import('bower_components/slick.js/slick/slick-theme.css');
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = app.toTree();
