# moment.js

### 获取当前时间

```js
function getCurrentTime() {
  return moment()
}
```

### 格式化时间

```js
function formatTime(time, formatStr) {
  return moment(time).format(formatStr || 'YYYY-MM-DD HH:mm:ss')
}
```

### 比较时间大小

```js
function isBefore(time1, time2) {
  return moment(time1).isBefore(time2)
}

function isAfter(time1, time2) {
  return moment(time1).isAfter(time2)
}
```

### 获取时间差

```js
function getDuration(startTime, endTime) {
  return moment.duration(moment(endTime).diff(moment(startTime)))
}
```

### 时间加减

```js
function addTime(time, duration, unit) {
  return moment(time).add(duration, unit)
}

function subtractTime(time, duration, unit) {
  return moment(time).subtract(duration, unit)
}
```

### 时间戳转日期

```js
function timestampToDate(timestamp) {
  return moment.unix(timestamp).format('YYYY-MM-DD HH:mm:ss')
}
```

### 日期转时间戳

```js
function dateToTimestamp(dateStr) {
  return moment(dateStr).unix()
}
```

### 代码示例

```js
const now = getCurrentTime()
console.log('当前时间:', formatTime(now)) // 当前时间: 2023-06-05 08:43:12

const startTime = '2023-05-30 09:00:00'
const endTime = '2023-06-10 18:00:00'
console.log('是否开始前:', isBefore(now, startTime)) // 是否开始前: false
console.log('是否结束后:', isAfter(now, endTime)) // 是否结束后: false

const duration = getDuration(startTime, endTime)
console.log('持续时间:', duration.humanize()) // 持续时间: 11 天

const later = addTime(now, 1, 'hour')
console.log('一小时后:', formatTime(later)) // 一小时后: 2023-06-05 09:43:12

const earlier = subtractTime(now, 3, 'days')
console.log('三天前:', formatTime(earlier)) // 三天前: 2023-06-02 08:43:12

const timestamp = dateToTimestamp('2023-06-05 08:55:00')
console.log('时间戳:', timestamp) // 时间戳: 1686075300

const dateStr = timestampToDate(timestamp)
console.log('日期字符串:', dateStr) // 日期字符串: 2023-06-05 08:55:00
```
