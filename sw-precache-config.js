module.exports = {
  staticFileGlobs: [
    'build/**.html',
    'build/**.js',
    'build/**.css',
    'build/static/media/*',
    'build/static/js/*',
    'build/static/css/*',
  ],
  root: 'build',
  stripPrefix: 'build/',
  navigateFallback: '/index.html',
  runtimeCaching: [{
    urlPattern: /http/,
    handler: 'networkFirst'
  }],
};
