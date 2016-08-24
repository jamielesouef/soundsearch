const makeKarmaConfig = require('./make-karma-config');

module.exports = function karmaCoverageConfig(config) {
  config.set(makeKarmaConfig({
    coverage: true,
    thresholdReporter: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  }));
};
