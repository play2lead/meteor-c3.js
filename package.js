Package.describe({
  name: 'peernohell:c3',
  summary: "C3 (0.4.8) charting library based on D3.",
  version: "1.1.2",
  git: "https://github.com/peernohell/meteor-c3.js.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom("METEOR@0.9.0");
  api.use("sergeyt:d3@3.4.1", 'client');
  //api.use("d3js:d3@3.4.13", 'client');
  api.add_files([
    'c3/c3.min.js',
    'c3/c3.css'
  ], 'client');
});
