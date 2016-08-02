/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    sassOptions: {
      includePaths: [
        'addon/styles',
        'node_modules/frontend-basis/sass',
        'node_modules/frontend-basis/node_modules'
      ]
    }
  });
  return app.toTree();
};