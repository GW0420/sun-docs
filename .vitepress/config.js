import { defineConfig } from "vitepress"
import { componentPreview, containerPreview } from "@vitepress-demo-preview/plugin"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "sun-title",
  description: "sun-decription",
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/style/birds.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    algolia: {
      appId: "...",
      apiKey: "...",
      indexName: "..."
    },
    logo: "/style/birds.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "学习笔记", link: "/sidebar/introduction/index.md" }
    ],
    sidebar: [
      {
        text: "Introduction",
        collapsed: true,
        items: [{ text: "element-plus", link: "/sidebar/introduction/index.md" }]
      },
      {
        text: "JavaScript",
        collapsed: true,
        items: [{ text: "加载中...", link: "/sidebar/javaScript/index.md" }]
      },
      {
        text: "TypeScript",
        collapsed: true,
        items: [{ text: "加载中...", link: "/sidebar/typescript/index.md" }]
      },
      {
        text: "Vue.js",
        collapsed: true,
        items: [{ text: "加载中...", link: "/sidebar/vue/index.md" }]
      },
      {
        text: "组件封装",
        collapsed: true,
        items: [
          { text: "element-plus", link: "/sidebar/component/element.md" },
          { text: "view-design", link: "/sidebar/component/iview.md" }
        ]
      },
      {
        text: "工具函数",
        collapsed: true,
        items: [{ text: "加载中...", link: "/sidebar/util/index.md" }]
      }
    ],
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "Edit this page on GitHub"
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You"
    },
    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }]
  },
  markdown: {
    lineNumbers: true,
    config(md) {
      md.use(componentPreview)
      md.use(containerPreview)
    }
  }
})
