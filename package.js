Package.describe({
  name: 'peernohell:c3',
  summary: "C3 (0.4.10) charting library based on D3.",
  version: "1.1.3",
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
