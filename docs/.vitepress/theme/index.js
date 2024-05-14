import theme from "vitepress/dist/client/theme-default/index"
import { AntDesignContainer } from "@vitepress-demo-preview/component"
import ElementPlus from "element-plus"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
// 引入样式
import "@vitepress-demo-preview/component/dist/style.css"
import "@gw0420/hooks/hooks.css"
import "element-plus/dist/index.css"
import "/public/reset.css"

// hooks
import data from '@gw0420/hooks'


export default {
  ...theme,
  enhanceApp({ app }) {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
    app.use(data.sunLoading)
    app.use(ElementPlus)
    app.component("demo-preview", AntDesignContainer)
  }
}
