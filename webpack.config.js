var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

const SentryCliPlugin = require('@sentry/webpack-plugin');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    publicPath: "/dist/",
    filename: '[name].js',
    sourceMapFilename: "[name].js.map",
  },
  plugins: [
    new SentryCliPlugin({
      release: function(hash) {
        return hash.slice(0, 5);
      },
      include: '.',
      ignoreFile: '.sentrycliignore',
      ignore: ['node_modules', 'webpack.config.js'],
      configFile: 'sentry.properties'
    })
  ],
  module : {
  loaders : [
    {
      test : /\.jsx?/,
      include : APP_DIR,
      loader : 'babel-loader'
    }
  ]
  }
};

module.exports = config;
