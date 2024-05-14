import { defineConfig } from 'vitepress'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/sun-docs/',
  title: 'sun-hooks',
  description: 'sun-decription',
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    lang: 'zh-CN',
    outline: {
      level: [2, 6],
      label: '目录'
    },
    algolia: {
      appId: '...',
      apiKey: '...',
      indexName: '...'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/sidebar/introduce/index.md' }
    ],
    sidebar: [
      {
        text: '指引',
        items: [
          { text: '介绍', link: '/sidebar/introduce/index.md' },
          { text: '快速开始', link: '/sidebar/introduce/start.md' }
        ]
      },
      {
        text: '业务组件',
        // collapsed: true,
        items: [
          { text: 'sunIcon', link: '/sidebar/ui/icon.md' },
          { text: 'sunLoading', link: '/sidebar/ui/loading.md' },
          { text: 'sunButton', link: '/sidebar/ui/button.md' },
          { text: 'sunSearchForm', link: '/sidebar/ui/searchForm.md' },
          { text: 'sunTable', link: '/sidebar/ui/table.md' },
          { text: 'sunModal', link: '/sidebar/ui/modal.md' },
          { text: 'sunPreviewImg', link: '/sidebar/ui/previewImg.md' },
          { text: 'sunTabs', link: '/sidebar/ui/tabs.md' },
          { text: 'sunRouterTabs', link: '/sidebar/ui/routerTabs.md' }
          // { text: "sunMetion", link: "/sidebar/ui/metion.md" }
        ]
      },
      {
        text: 'Hooks',
        // collapsed: true,
        items: [
          { text: 'useDrag', link: '/sidebar/hooks/useDrag.md' },
          { text: 'useDragSort', link: '/sidebar/hooks/useDragSort.md' },
          { text: 'useRotate', link: '/sidebar/hooks/useRotate.md' },
          { text: 'useScale', link: '/sidebar/hooks/useScale.md' },
          { text: 'useWaterMark', link: '/sidebar/hooks/useWaterMark.md' },
          { text: 'useDebounce', link: '/sidebar/hooks/useDebounce.md' },
          { text: 'useThrottle', link: '/sidebar/hooks/useThrottle.md' },
          { text: 'useOnce', link: '/sidebar/hooks/useOnce.md' },
          { text: 'useCopyText', link: '/sidebar/hooks/useCopyText.md' }
        ]
      },
      {
        text: '工具函数',
        // collapsed: true,
        items: [
          { text: 'useThousandths', link: '/sidebar/util/formatAmount.md' },
          { text: 'useRandomColor', link: '/sidebar/util/randomColor.md' },
          { text: 'useRandomGradienColor', link: '/sidebar/util/randomGradienColor.md' },
          { text: 'usePick', link: '/sidebar/util/pick.md' },
          { text: 'useJsontoTree', link: '/sidebar/hooks/useJsontoTree.md' }
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present gavin gu'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  },
  // themeConfig: {
  //   // https://vitepress.dev/reference/default-theme-config
  //   outline: {
  //     level: [2, 6],
  //     label: "目录"
  //   },
  //   algolia: {
  //     appId: "...",
  //     apiKey: "...",
  //     indexName: "..."
  //   },
  //   logo: "/logo.svg",
  //   nav: [
  //     { text: "首页", link: "/" },
  //     { text: "笔记", link: "/view/introduce.md" }
  //   ],
  //   sidebar: [
  //     {
  //       text: "指引",
  //       items: [
  //         { text: "介绍", link: "/view/introduce.md" },
  //         { text: "快速开始", link: "/view/start.md" }
  //       ]
  //     }
  //   ],
  //   editLink: {
  //     pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
  //     text: "Edit this page on GitHub"
  //   },
  //   footer: {
  //     message: "Released under the MIT License.",
  //     copyright: "Copyright © 2023-present gavin gu"
  //   },
  //   socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }]
  // },
  markdown: {
    lineNumbers: true,
    config(md) {
      md.use(componentPreview)
      md.use(containerPreview)
    }
  }
})
