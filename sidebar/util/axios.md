# axios

### 响应拦截器

使用 axios 创建了一个 service 实例，该实例拦截每个请求并添加请求/响应拦截器，用于处理统一的请求/响应错误和数据解析。

```js
import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 接口的基础url
  timeout: 5000 // 超时时间
})

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    // ...

    return config
  },
  error => {
    // 对请求错误做些什么
    // ...

    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    // ...

    return response.data
  },
  error => {
    // 对响应错误做点什么
    // ...

    return Promise.reject(error)
  }
```

### 请求方式封装

```js
// 封装 自定义 请求方法
export function sunny(params) {
  return service({
    method: 'get', // [get, post, postJson,postform ]
    url: '/admin/api/update.htm',
    data: params,
    headers: { 'multipart/form-data' }
    // headers: { 'Content-Type': 'application/json;charset=UTF-8' }
    // headers: { 'application/x-www-form-urlencoded;charset=utf-8' }
  })
}

```
