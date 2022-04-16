module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Python 創作分享平台操作文件',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Python 創作分享平台操作文件',

  base: '/pyShare-docs/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#0277bd' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: '操作文件',
        link: '/guide/',
      },
      {
        text: '常見問題',
        link: '/guide/faq',
      },
      {
        text: '關於平台',
        link: '/about/'
      },
    ],
    sidebar: {
      '/guide/': [
        '',
        {
          title: '【教師】',
          collapsable: false,
          children: [
            'teacher-quick-start',
            'teacher-challenge',
            'teacher-problem',
            'teacher-course',
          ]
        },
        {
          title: '【學生】',
          collapsable: false,
          children: [
            'student-challenge',
            'student-creation',
            'student-problem',
          ]
        },
        'modules',
        'faq',
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
