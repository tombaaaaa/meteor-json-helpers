Template.registerHelper('json', function (context) {
  return Spacebars.SafeString('<pre>' + JSON.stringify(context, null, "  ") + '</pre>');
});
