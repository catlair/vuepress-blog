// const sidebarConfig = require('./sidebarConfig');

module.exports = {
  type: 'blog',
  author: 'catlair',
  // logo: '/head.png',
  // authorAvatar: '/avatar.png',
  subSidebar: 'auto',
  lastUpdated: '上次更新',
  nextLinks: true,
  prevLinks: true,
  nav: [
    { text: '时间线', link: '/timeline/', icon: 'reco-date' },
    {
      text: 'Github',
      link: 'https://github.com/catlair/vuepress-blog',
      icon: 'reco-github',
    },
  ],
  blogConfig: {
    category: {
      location: 2, // 在导航栏菜单中所占的位置，默认2
      text: '分类', // 默认文案 “分类”
    },
    tag: {
      location: 3, // 在导航栏菜单中所占的位置，默认3
      text: '标签', // 默认文案 “标签”
    },
  },
  sidebar: 'auto',
  // sidebar: {
  //   ...sidebarConfig,
  // },
  /**
   * support for
   * 'default'
   * 'funky'
   * 'okaidia'
   * 'solarizedlight'
   * 'tomorrow'
   */
  codeTheme: 'tomorrow', // default 'tomorrow'
};
