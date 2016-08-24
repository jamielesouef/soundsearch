const makeKarmaConfig = require('./make-karma-config')({});

module.exports = function karmaConf(config) {
  config.set(makeKarmaConfig);
};
