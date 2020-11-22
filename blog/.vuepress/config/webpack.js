const { resolve } = require('path');

const isProduction = process.env.NODE_ENV === 'production';

const chainWebpack = (config, isServer) => {
  config.module
    .rule('images')
    .test(/\.(png|jpe?g|gif)(\?.*)?$/)
    .use('url-loader')
    .loader('url-loader')
    .options({
      limit: 10000,
      name: `images/pageimg/[name].[hash:4].[ext]`,
    });

  config.resolve.alias.set('@img', resolve(__dirname, '../public/images'));
};

const configureWebpack = (config, isServer) => {
  if (isProduction) {
    let externals = {
      vue: 'Vue',
    };
    if (!isServer) {
      externals = {
        ...externals,
        'vue-router': 'VueRouter',
      };
    }
    config.externals = externals;
  }
};

module.exports = {
  chainWebpack,
  configureWebpack,
};
