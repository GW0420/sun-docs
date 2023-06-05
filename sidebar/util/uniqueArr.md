# 数组对象去重

### 基于对象键值的去重实现

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

### 使用 reduce 方法

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

### 使用 filter 和 findIndex 方法

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
