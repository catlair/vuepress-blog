const { resolve } = require('path');

const isProduction = process.env.NODE_ENV === 'production';
const isLocal = !process.env.NODE_BUILD_ENV;

const chainWebpack = (config, isServer) => {
  const imagesUrlLoader = () => {
    if (isProduction) {
      if (isLocal) {
        return {
          name: 'images/pageimgs/[name][hash:4].[ext]',
        };
      }

      return {
        publicPath: 'https://cdn.jsdelivr.net/gh/catlair/vuepress-blog/',
        outputPath: undefined,
        emitFile: false,
      };
    }
    return {};
  };

  config.module
    .rule('images')
    .test(/\.(png|jpe?g|gif)(\?.*)?$/)
    .use('url-loader')
    .loader('url-loader')
    .options({
      limit: 10000,
      name: '[path][name].[ext]',
      ...imagesUrlLoader(),
    });

  config.resolve.alias
    .set('@@', resolve(__dirname, process.cwd()))
    .set('@', resolve(__dirname, '../../'))
    .set('@img', resolve(__dirname, '../public/images'));
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
    // return {
    //   externals,
    // };
  }
};

module.exports = {
  chainWebpack,
  configureWebpack,
};
