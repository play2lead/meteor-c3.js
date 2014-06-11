Package.describe({
  summary: "A Meteor port for the C3 charting library based on D3."
});

Package.on_use(function (api, where) {
  api.use('d3', 'client');
  api.add_files([
    'c3/c3.min.js',
    'c3/c3.css'
  ], 'client');
});