module.exports = require('./make-webpack-config')({
  lint: true,
  // OPTIONAL: This can optimise your build a lot at the expense of
  // sourcemaps for third party libraries (look at scripts/webpack-libs)
  // Libraries listed here are no parsed by Webpack unless set otherwise
  libs: [
    {
      'react-bootstrap': {
        path: 'react-bootstrap/dist/react-bootstrap.min.js',
        loader: true,
      },
    },
    {
      moment: {
        path: 'moment/min/moment.min.js',
        loader: true,
      },
    },
  ],
});
