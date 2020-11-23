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
      text: '文档',
      link: '/demo/',
      icon: 'reco-document',
      items: [
        { text: '小案例', link: '/demo/' },
        { text: '算法考试', link: '/exam/' },
      ],
    },
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
  sidebar: {
    // {
    //   title: '组件',   // 必要的
    //   path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //   collapsable: false, // 可选的, 默认值是 true,
    //   sidebarDepth: 1,    // 可选的, 默认值是 1
    //   children: [
    //     '/'
    //   ]
    // },
    '/demo/': [
      {
        title: '组件',
        collapsable: false,
        children: [
          {
            title: 'markdown测试',
            path: '/demo/1/',
          },
          {
            title: 'demo测试',
            path: '/demo/2/',
          },
        ],
      },
    ],
    '/exam/': [
      {
        title: '递归法',
        collapsable: false,
        children: [
          {
            title: '选择排序【p63】',
            path: '/exam/recursion/1/',
          },
          {
            title: '冒泡排序【p65】',
            path: '/exam/recursion/2/',
          },
          {
            title: '全排列【p175】',
            path: '/exam/recursion/3/',
          },
          {
            title: 'Fibonacci',
            path: '/exam/recursion/4/',
          },
        ],
      },
      {
        title: '分治法',
        collapsable: false,
        children: [
          {
            title: '快速排序【p86】',
            path: '/exam/dc/1/',
          },
          {
            title: '归并排序【p88】',
            path: '/exam/dc/2/',
          },
          {
            title: '查找最大值和次大值【p91】',
            path: '/exam/dc/3/',
          },
          {
            title: '折半查找【p93】',
            path: '/exam/dc/4/',
          },
          {
            title: '女排对阵表【p106】',
            path: '/exam/dc/5/',
          },
        ],
      },
      {
        title: '蛮力法',
        collapsable: false,
        children: [
          {
            title: '选择排序【p125】',
            path: '/exam/brute/1/',
          },
          {
            title: '冒泡排序【p127】',
            path: '/exam/brute/2/',
          },
          {
            title: '最连续大子序列值【p129】',
            path: '/exam/brute/3/',
          },
          {
            title: '01背包【p135】',
            path: '/exam/brute/4/',
          },
        ],
      },
      {
        title: '回溯法',
        collapsable: false,
        children: [
          {
            title: '算数解法【p172】',
            path: '/exam/backtracking/1/',
          },
          {
            title: '01背包【p178】',
            path: '/exam/backtracking/2/',
          },
          {
            title: '活动安排问题【p198】',
            path: '/exam/backtracking/3/',
          },
          {
            title: '迷宫问题【p154】',
            path: '/exam/backtracking/4/',
          },
        ],
      },
      {
        title: '贪心法',
        collapsable: false,
        children: [
          {
            title: '应找零钱',
            path: '/exam/greedy/1/',
          },
          {
            title: '柠檬水找零',
            path: '/exam/greedy/2/',
          },
          {
            title: '简单背包问题【p251】',
            path: '/exam/greedy/3/',
          },
          {
            title: '求解活动安排【p246】',
            path: '/exam/greedy/4/',
          },
        ],
      },
      {
        title: '动态规划',
        collapsable: false,
        children: [
          {
            title: '斐波那契数列【p282】',
            path: '/exam/dynamic/1/',
          },
          {
            title: '整数拆分【p291】',
            path: '/exam/dynamic/2/',
          },
          {
            title: '01背包【p307】',
            path: '/exam/dynamic/3/',
          },
          {
            title: '最长公共子序列【p299】',
            path: '/exam/dynamic/4/',
          },
        ],
      },
    ],
  },
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
