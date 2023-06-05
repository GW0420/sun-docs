<!--
 * @Author: Michael
 * @Date: 2023-06-05 15:49:20
 * @Description:
 * @FilePath: \sun-docs\sidebar\util\vuex.md
-->

# Vuex Module

### 模块化

Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：

### index.js

```js
import { createStore } from 'vuex'
import getters from './getters'
import user from './modules/user'

export default createStore({
  getters,
  modules: {
    user
  }
})
```

### getters

```js
/**
 * 快捷访问
 */
const getters = {
  // token
  token: state => state.user.token,
  // SidebarMenu 快捷导航
  cssVar: state => variables,
  // 菜单伸缩功能
  sidebarOpened: state => state.app.sidebarOpened,
  // 国际化
  language: state => state.app.language,
  // 主题色
  mainColor: state => state.theme.mainColor,
  // tags
  tagsViewList: state => state.app.tagsViewList
}

export default getterss
```

### modules/user

```js
export default {
  namespaced: true,
  state: () => ({
    token: ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
    }
  },
  actions: {
    getToken(context, data) {
      context.commit('setToken', data)
    }
  }
}
```

### 代码示例

```js
import { useStore } from 'vuex'

const store = useStore()

console.log(store.getters.token) // eyJhbGciOiJIUzUxMi
```
