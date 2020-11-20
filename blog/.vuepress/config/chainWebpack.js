module.exports = (config, isServer) => {
  config.module
    .rule('images')
    .test(/\.(png|jpe?g|gif)(\?.*)?$/)
    .use('url-loader')
    .loader('url-loader')
    .options({
      limit: 10000,
      name: `images/pageimg/[name].[hash:8].[ext]`,
    });
};
