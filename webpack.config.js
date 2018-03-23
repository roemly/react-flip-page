var path = require('path');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
 
const PUBLIC_PATH = 'https://apps.langgeng.aindo.com/';  // webpack needs the trailing slash for output.publicPath
 
module.exports = {
 
  entry: {
    main: path.resolve(__dirname, 'src/index'),
  },
 
  output: {
    path: path.resolve(__dirname, 'src/bundles/'),
    filename: '[name]-[hash].js',
    publicPath: PUBLIC_PATH,
  },
 
  plugins: [
    new SWPrecacheWebpackPlugin(
      {
        cacheId: 'langgeng',
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'service-worker.js',
        minify: true,
        navigateFallback: PUBLIC_PATH + '/News',
        staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
      }
    ),
  ],
}