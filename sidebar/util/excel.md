# excel 导出

### 导出封装

前端 Excel 导出的参考代码示例：

```js
// 导出封装
import axios from 'axios'
import { GET_COOKIE } from '@/util/cookie.js'
/**
 *
 * @param url 导出地址
 * @param params 想要携带的参数
 */
export function getExport(url, params) {
  return new Promise((resolve, reject) => {
    axios.interceptors.request.use(
      config => {
        config.headers.authorization = 'Bearer ' + GET_COOKIE('token')
        config.headers.Accept = 'application/x-www-form-urlencoded'
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
    axios
      .get(url, { params, responseType: 'arraybuffer' })
      .then(resp => {
        const { data, headers } = resp
        const fileName = headers['content-disposition'].replace(/\w+;filename=(.*)/, '$1')
        const blob = new Blob([data], { type: headers['content-type'] })
        const dom = document.createElement('a')
        const url = window.URL.createObjectURL(blob)
        dom.href = url
        dom.download = decodeURI(fileName)
        dom.style.display = 'none'
        document.body.appendChild(dom)
        dom.click()
        dom.parentNode.removeChild(dom)
        window.URL.revokeObjectURL(url)

        resolve({ code: '00000', message: '导出成功' })
      })
      .catch(err => {
        reject({ code: 'B0001', message: '导出失败' })
      })
  })
}

export function postExport(url, params) {
  return new Promise((resolve, reject) => {
    axios.interceptors.request.use(
      config => {
        config.headers.authorization = 'Bearer ' + GET_COOKIE('token')
        config.headers.Accept = 'application/x-www-form-urlencoded'
        return config
      },

      error => {
        return reject(error)
      }
    )

    axios
      .post(url, params, { responseType: 'blob' })
      .then(resp => {
        if (resp.status === 200) {
          const { data, headers } = resp
          const fileName = headers['content-disposition'].replace(/\w+;filename=(.*)/, '$1')
          // const fileName = headers['content-disposition'].split('fileName=')[1] || contentDisposition.split('filename=')[1]
          const blob = new Blob([data], { type: headers['content-type'] })
          const dom = document.createElement('a')
          const url = window.URL.createObjectURL(blob)
          dom.href = url
          dom.download = decodeURI(fileName)
          dom.style.display = 'none'
          document.body.appendChild(dom)
          dom.click()
          dom.parentNode.removeChild(dom)
          window.URL.revokeObjectURL(url)
          resolve({ code: '00000', message: '导出成功' })
        }
      })
      .catch(err => {
        reject({ code: 'B0001', message: '导出失败' })
      })
  })
}

// 根据地址导出数据
export function getUrlData(url, params) {
  axios.interceptors.request.use(
    config => {
      config.headers.authorization = 'Bearer ' + GET_COOKIE('token')
      return config
    },
    error => {
      this.loading = false
      return Promise.reject(error)
    }
  )
  axios.post(url, params, { responseType: 'blob' }).then(resp => {
    if (resp.status !== 200) {
      this.loading = false
      this.$Message('error', '导出失败')
    }
    if (resp?.code && resp.code !== '000000') {
      this.loading = false
      this.$Message('error', '导出失败')
      return
    }
    const { data, headers } = resp
    const fileName = headers['content-disposition'].split('fileName=')[1] || contentDisposition.split('filename=')[1]
    const blob = new Blob([data], {
      type: headers['content-type']
    })
    const dom = document.createElement('a')
    const url = window.URL.createObjectURL(blob)
    dom.href = url
    dom.download = decodeURI(fileName)
    dom.style.display = 'none'
    document.body.appendChild(dom)
    dom.click()
    dom.parentNode.removeChild(dom)
    window.URL.revokeObjectURL(url)
    this.loading = false
    this.$Message('success', '导出成功')
  })
}
```
