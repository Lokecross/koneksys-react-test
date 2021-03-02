const path = require('path');
module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      'components': path.resolve(__dirname, 'src/shared/components'),
      'styles': path.resolve(__dirname, 'src/shared/styles'),
      'pages': path.resolve(__dirname, 'src/pages')
    },
  };
return config;
};
