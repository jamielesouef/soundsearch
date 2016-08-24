const path = require('path');
const processLibs = require('./webpack-libs');

const rootPath = path.join(__dirname, '..');
const srcPath = path.join(rootPath, 'src');
const stylesPath = path.join(rootPath, 'src/css');

module.exports = function makeKarmaConfig(options) {
  const module = {
    loaders: [
      { test: /\.js?$/, exclude: /node_modules/, loader: 'babel' },
      {
        test: /\.scss/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]!postcss!sass',
      },
      { test: /\.css$/, loader: 'style!css' },
    ],
  };

  const config = {
    browsers: ['PhantomJS'],

    files: [
      {
        pattern: '../src/**/__tests__/**Spec.js',
        watched: false,
        included: true,
        served: true,
      },
      // Each file acts as entry point for the webpack configuration
    ],

    frameworks: [
      'jasmine-ajax',
      'jasmine',
      'phantomjs-shim',
    ],

    preprocessors: {
      '../src/**/__tests__/*': ['webpack'],
    },

    webpack: {
      cache: true,
      resolve: {
        root: [srcPath, stylesPath],
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules'],
        // Babel
        alias: {
          'babel-polyfill': 'babel-polyfill/dist/polyfill.min.js',
        },
      },
      module,
      devtool: 'inline-source-map',
      watch: true,
      externals: {
        cheerio: 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
      },
    },
    reporters: ['progress'],

    junitReporter: {
      outputDir: '../ut-result/',
    },

    colors: true,

    coverageReporter: {
      dir: '../coverage/',
      reporters: [
        { type: 'text', subdir: 'report-text' },
        { type: 'html', subdir: 'report-html' },
      ],
    },

    thresholdReporter: options.thresholdReporter || {},

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      noInfo: true,
    },

    plugins: [
      'karma-jasmine',
      'karma-phantomjs-shim',
      'karma-phantomjs-launcher',
      'karma-webpack',
      'karma-chrome-launcher',
      'karma-jasmine-ajax',
      'karma-sourcemap-loader',
      'karma-coverage',
      'karma-junit-reporter',
      'karma-threshold-reporter',
    ],
  };

  if (options.logLevel) config.logLevel = options.logLevel;
  if (options.libs) config.webpack.libs = options.libs;

  if (options.coverage) {
    config.webpack.module.preLoaders = [
      { test: /\.js$/, include: /src/, exclude: /(node_modules|__tests__)/, loader: 'isparta' },
    ];

    config.reporters = config.reporters.concat(['coverage', 'threshold']);
  }

  processLibs(config.webpack);
  return config;
};
