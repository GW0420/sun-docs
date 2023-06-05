# 常用正则

### 判断是否为邮箱格式。

```js
function isEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
}
```

### 判断是否为手机号码。

```js
function isPhoneNum(num) {
  return /^1[3-9]\d{9}$/.test(num)
}
```

### 判断是否为国内电话号码。

```js
function isZhPhoneNum(num) {
  return new RegExp(/\d{3}-\d{8}|\d{4}-\d{7}/).test(v)
}
```

### 判断是否为身份证号码。

```js
function isIDCard(cardID) {
  return /^(\d{15})|(\d{17}([0-9]|X))$/.test(cardID)
}
```

### 判断是否为邮政编码。

```js
function isPostcode(code) {
  return /^[1-9][0-9]{5}$/.test(code)
}
```

### 判断是否为 HTML 标签。

```js
function isHTML(htmlStr) {
  return /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/.test(htmlStr)
}
```

### 判断是否为 JSON 字符串。

```js
function isJSON(jsonStr) {
  try {
    JSON.parse(jsonStr)
  } catch (e) {
    return false
  }
  return true
}
```

### 判断密码是否弱（只包含字母或数字）。

```js
function isWeakPwd(pwd) {
  return /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(pwd)
}
```
