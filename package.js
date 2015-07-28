Package.describe({
  name: 'tomba:json-helpers',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: "JSON helpers: Helpers for debugging objects in templates",
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.0");

  api.use(['spacebars', 'templating']);

  api.addFiles([
    'lib/client/handlebars.js',
  ], 'client');
});
