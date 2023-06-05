<!--
 * @Author: Michael
 * @Date: 2023-06-05 17:04:28
 * @Description:
 * @FilePath: \sun-docs\sidebar\util\index.md
-->

# 常用函数

### 深拷贝

深拷贝是指创建一个新的对象或数组，将原始对象或数组的所有属性或元素递归地复制到新的对象或数组中，使之成为两个相互独立的副本，互不影响。

```js
function deepClone(obj) {
  if (typeof obj !== 'object' || obj == null) {
    return obj;
  }
  let result = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}
}
```

### 千分位

千分位
number 要格式化的数字
decimals 保留几位小数
dec_point 小数点符号
thousands_sep 千分位符号

```js
export const numberFormat = (number, decimals, dec_point, thousands_sep) => {
  number = (number + '').replace(/[^0-9+-Ee.]/g, '')
  const n = !isFinite(+number) ? 0 : +number
  const prec = !isFinite(+decimals) ? 2 : Math.abs(decimals)
  const sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep
  const dec = typeof dec_point === 'undefined' ? '.' : dec_point
  let s = ''
  const toFixedFix = function (n, prec) {
    const k = Math.pow(10, prec)
    return '' + Math.ceil(n * k) / k
  }
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  const re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2')
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}
```

### 防抖函数

防抖函数的作用是在一定时间内，只执行最后一次触发的事件，比如输入框连续的输入操作，如果不做处理，每次输入都会触发事件处理函数，阻塞了很多处理资源，可以借助防抖函数来优化处理。

```JS
function debounce(func, delay) {
  let timer = null;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
```

### 节流函数

节流函数的作用是在一定时间范围内，只允许该函数执行一次，可以控制函数的执行频率。比如在下拉滚动的数据加载场景中，用户连续滚动会触发很多次数据加载请求，会造成性能问题，这时候就可以使用节流函数进行优化处理。

```JS
function throttle(func, wait) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, args);
        timer = null;
      }, wait);
    }
  };
}
```

### 数组对象去重

JS 中数组去重是一个非常常见的问题，解决这个问题有好多种方法，示例代码提供了 5 中数组去重的方法:

##### 基于对象键值的去重实现

```js
const arr = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'John' },
  { id: 4, name: 'Jane' }
]

const map = new Map()

arr.forEach(item => {
  if (!map.has(item.name)) {
    map.set(item.name, item)
  }
})

// const uniqueArr = [...new Map(arr.map(item => [item['name'], item])).values()]

console.log(uniqueArr)
// Output: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]
```

##### 使用 reduce 方法

```js
const arr = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' },
  { id: 3, name: 'Charlie' },
  { id: 2, name: 'Bob' }
]
const result = arr.reduce((prev, curr) => {
  const index = prev.findIndex(item => item.id === curr.id)
  if (index === -1) {
    prev.push(curr)
  }
  return prev
}, [])
console.log(result)
// Output: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }, { id: 3, name: "Charlie" }]
```

##### 使用 filter 和 findIndex 方法

```js
const arr = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' },
  { id: 3, name: 'Charlie' },
  { id: 2, name: 'Bob' }
]
const result = arr.filter((item, index) => {
  return arr.findIndex(t => t.id === item.id) === index
})
console.log(result)
// Output: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }, { id: 3, name: "Charlie" }]
```

### excel 导出

导出 Excel 功能有 2 种常用的方法，一种就是前端根据数据自行使用 Xlsx.js 进行导出；还有一种就是调用后端接口获得二进制流然后再导出为 Excel。此示例为后端实现方案：

##### 封装导出 get

```js
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
  // Output: getExport(this.url, { promotionId: this.promotionId, ruleKey: this.ruleKey })
}
```

##### 封装导出 post

```js
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
  //Output:  Export(this.url, params)
}
```

##### 根据地址导出数据

```js
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
  // Output:  getUrlData(BASE_URL + 'admin/dict/exportDict.htm', `dictId=${this.sysDictId}`)
}
```
