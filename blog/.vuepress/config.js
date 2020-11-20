const themeConfig = require('./config/themeConfig');
const configureWebpack = require('./config/configureWebpack');
const chainWebpack = require('./config/chainWebpack');
const markdown = require('./config/markdown');
const head = require('./config/head');

module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  theme: 'reco',
  //导入其他配置
  head,
  markdown,
  themeConfig,
  configureWebpack,
  chainWebpack,
};
