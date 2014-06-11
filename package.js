Package.describe({
  summary: "A Meteor port for the C3 charting library based on D3."
});

Package.on_use(function (api, where) {
  api.use('d3', 'client');
  api.add_files([
    'lib/c3.min.js',
    'lib/c3.css'
  ], 'client');
});