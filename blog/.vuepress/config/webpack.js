const { resolve } = require('path');

const isProduction = process.env.NODE_ENV === 'production';
// const cdn = {
//   // css: ['xxx.css', 'sss.js'],
//   js: ['https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js'],
// };

const chainWebpack = (config, isServer) => {
  config.module
    .rule('images')
    .test(/\.(png|jpe?g|gif)(\?.*)?$/)
    .use('url-loader')
    .loader('url-loader')
    .options({
      limit: 10000,
      name: `images/pageimg/[name].[hash:8].[ext]`,
    });

  config.resolve.alias.set('@img', resolve(__dirname, '../public/images'));
};

const configureWebpack = (config, isServer) => {
  if (isProduction) {
    const externals = {
      vue: 'Vue',
    };
    if (!isServer) {
      externals['vue-router'] = 'VueRouter';
    }
    config.externals = externals;
  }
};

module.exports = {
  chainWebpack,
  configureWebpack,
};

// module.exports = {
//   chainWebpack: config => {
//     if (isProduction) {
//       config.plugin('html')
//       .tap(args => {
//           args[0].cdn = cdn;
//         return args;
//       })
//     }
//   }
// }
