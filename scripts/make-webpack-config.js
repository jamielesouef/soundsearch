const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const processLibs = require('./webpack-libs');
const path = require('path');

const rootPath = path.join(__dirname, '..');
const srcPath = path.join(rootPath, '/src');
const stylesPath = path.join(rootPath, 'src/css');

module.exports = function makeWepackConfig(options) {
  const env = options.env || 'development';

  const index = '../src/js/index.js';

  const defaultLoaders = [
    { test: /\.js?$/, include: [srcPath], loader: 'babel' },
    { test: /\.(png|jp(e)?g|gif|svg|cur)/, loader: 'url?limit=8192&name=/fonts/[name].[ext]' },
    { test: /\.(ico|ttf|eot|woff(2)?)/, loader: 'file?name=/images/[name].[ext]' },
  ];

  const defaultPlugins = [
    new webpack.DefinePlugin({
      'process.env': {
        // This has an effect on the react lib size
        NODE_ENV: JSON.stringify(env),
      },
    }),
    // Prevent moment.js to auto-require all the locales
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ];

  const config = {
    target: 'web',
    cache: true,
    resolve: {
      root: [srcPath, stylesPath],
      extensions: ['', '.js'],
      modulesDirectories: ['node_modules'],
    },
    entry: {
      module: [
        path.join(__dirname, index),
      ],
    },

    externals: {
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true,
    },
    devServer: {
      host: '0.0.0.0',
      contentBase: './dist',
      colors: true,
      port: 3001,
      hot: true,
      inline: true,
      historyApiFallback: true,
    },
    output: {
      path: './dist',
      publicPath: '/',
      filename: 'app.js',
      library: 'app',
      libraryTarget: 'var',
    },

    module: {
      preLoaders: [],
      loaders: [],
    },
    postcss: [autoprefixer({ browsers: ['last 2 versions', 'ie >= 10'] })],
    plugins: [
      new ExtractTextPlugin('[name].css'),
    ],
  };

  // Merge in default config with options
  Object.assign(config, options || {});

  // Minimum loaders and plugins
  config.module.loaders = config.module.loaders.concat(defaultLoaders);
  config.plugins = config.plugins.concat(defaultPlugins);

  // Enable linting
  if (options.lint) {
    config.module.preLoaders.push({ test: /\.js?$/, include: [srcPath], loader: 'eslint' });
    config.eslint = {
      quiet: true,
    };
  }

  // Extract styles in a separate file
  if (options.separateStylesheet) {
    config.module.loaders.push({
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]!postcss!sass'),
    });
    config.module.loaders.push({
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css?sourceMap!postcss?sourceMap'),
    });
    config.plugins.push(new ExtractTextPlugin('[name].[contenthash].css'));
  } else {
    config.module.loaders.push({
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]!postcss!sass'),
    });
    config.module.loaders.push({ test: /\.css$/, loader: 'style!css!postcss' });
  }

  processLibs(config);

  config.debug = true;
  config.devtool = 'eval-source-map';
  config.output.path = config.output.path || path.join(rootPath, 'tmp');
  config.output.pathInfo = config.output.pathInfo || true;

  config.plugins.push(new HtmlWebpackPlugin({
    template: 'src/html/standalone.html',
  }));

  return config;
};
