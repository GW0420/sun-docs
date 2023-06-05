<!--
 * @Author: Michael
 * @Date: 2023-06-05 09:55:56
 * @Description:
 * @FilePath: \sun-docs\sidebar\util\storage.md
-->

# localStorage

### 存储数据

将对象或数组的内容转化成 JSON 字符串后存入本地存储

```js
export const setItem = (key, value) => {
  // 将数组、对象类型的数据转化为JSON字符串进行存储
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}
```

### 获取数据

从本地存储中根据键名获取值，并将 JSON 字符串转化成对应的对象或数组。

```js
export const getItem = key => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}
```

### 删除数据

根据键名从本地存储中删除相应的值。

```js
export const removeItem = key => {
  window.localStorage.removeItem(key)
}
```

### 删除所有数据

清空整个本地存储。

```js
export const removeAllItem = key => {
  window.localStorage.clear()
}
```

### 代码示例

如果我们需要往 localStorage 里面存储一个名为 username 的字符串，可以这样做：

```js
setItem('username', 'sunny')
```

如果我们需要获取该值，可以这样做：

```js
const userName = getItem('username')
console.log(userName) // 'myname'
```

### 代码片段

- 示例 1

::: details

```js
/**
 * 存储数据
 */
export const setItem = (key, value) => {
  // 将数组、对象类型的数据转化为JSON字符串进行存储
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

/**
 * 获取数据
 */
export const getItem = key => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

/**
 * 删除数据
 */
export const removeItem = key => {
  window.localStorage.removeItem(key)
}

/**
 * 删除所有数据
 */
export const removeAllItem = key => {
  window.localStorage.clear()
}
```

:::

- 示例 2

::: details

```js
const Storage = {
  set: function (key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.error(`Unable to set item in localStorage for key "${key}"`)
    }
  },
  get: function (key) {
    try {
      const value = localStorage.getItem(key)
      return value ? JSON.parse(value) : null
    } catch (e) {
      console.error(`Unable to get item from localStorage for key "${key}"`)
      return null
    }
  },
  remove: function (key) {
    try {
      localStorage.removeItem(key)
    } catch (e) {
      console.error(`Unable to remove ${key} from localStorage`)
    }
  },
  clear: function () {
    try {
      localStorage.clear()
    } catch (e) {
      console.error('Unable to clear localStorage')
    }
  }
}
```

:::
