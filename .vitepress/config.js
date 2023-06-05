/*
 * @Author: Michael
 * @Date: 2023-06-05 09:55:56
 * @Description:
 * @FilePath: \sun-docs\.vitepress\config.js
 */
import { defineConfig } from 'vitepress'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'sun-title',
  description: 'sun-decription',
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/style/logo.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: [2, 6],
    algolia: {
      appId: '...',
      apiKey: '...',
      indexName: '...'
    },
    logo: '/style/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/sidebar/study/index.md' }
    ],
    sidebar: [
      {
        text: '组件封装',
        collapsed: true,
        items: [
          { text: 'element-plus', link: '/sidebar/component/element.md' },
          { text: 'view-design', link: '/sidebar/component/iview.md' }
        ]
      },
      {
        text: '工具函数',
        collapsed: true,
        items: [
          { text: '常用函数', link: '/sidebar/util/index.md' },
          { text: 'localStorage', link: '/sidebar/util/storage.md' },
          { text: 'axios', link: '/sidebar/util/axios.md' },
          { text: 'vuex', link: '/sidebar/util/vuex.md' },
          { text: 'regex', link: '/sidebar/util/regex.md' },
          { text: 'moment', link: '/sidebar/util/moment.md' }
        ]
      },
      {
        text: '面试笔记',
        collapsed: true,
        items: [{ text: '加载中...', link: '/sidebar/study/index.md' }]
      }
    ],
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  },
  markdown: {
    lineNumbers: true,
    config(md) {
      md.use(componentPreview)
      md.use(containerPreview)
    }
  }
})
