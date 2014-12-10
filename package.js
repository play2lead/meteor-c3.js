Package.describe({
  name: 'peernohell:c3',
  summary: "A Meteor port for the C3 (0.4.7) charting library based on D3. Clone of TackMobile/meteor-c3.js",
  version: "1.1.0",
  git: "https://github.com/peernohell/meteor-c3.js.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom("METEOR@0.9.0");
  api.use("sergeyt:d3@3.4.1", 'client');
  api.add_files([
    'c3/c3.min.js',
    'c3/c3.css'
  ], 'client');
});
