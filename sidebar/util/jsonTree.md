# json 转树型结构

## 使用递归的方式

递归的思路是，在树形结构中，每个节点都有一组子节点，我们可以将每个节点的子节点找出来，然后递归地将它们转换成子树。递归的结束条件是找到叶节点（没有子节点）为止。

以下是使用递归实现将 JSON 转换成树形结构的代码：

```js
function convertToTree(data, parentId = null) {
  return data
    .filter(item => item.parentId === parentId)
    .map(item => ({ ...item, children: convertToTree(data, item.id) }))
}
```

convertToTree 函数接受两个参数，一个是 JSON 数组，一个是要转换的父节点的 parentId。我们用 filter 方法来找到所有子节点，并使用 map 方法递归地将它们转换成子树。

我们来测试一下该函数：

```js
const data = [
  { id: 1, parentId: null, name: "根节点" },
  { id: 2, parentId: 1, name: "子节点1" },
  { id: 3, parentId: 1, name: "子节点2" },
  { id: 4, parentId: 2, name: "子节点1.1" },
  { id: 5, parentId: 2, name: "子节点1.2" },
  { id: 6, parentId: 3, name: "子节点2.1" }
]

const tree = convertToTree(data)
console.log(tree)
```

## 使用 Map 数据结构的方法

Map 数据结构可以用来辅助构建树形结构，它可以通过 id 来查找节点，也可以通过 parentId 来查找子节点。我们可以在遍历数据时将每个节点添加到 Map 中，然后在第二次遍历数据时根据 parentId 查找父节点，在父节点的 children 属性中添加子节点。

以下是使用 Map 构建树形结构的代码：

```js
function convertToTree(data) {
  const map = {}
  const roots = []
  for (const item of data) {
    const { id, parentId } = item
    if (!map[id]) {
      map[id] = { children: [] }
    }
    map[id] = { ...item, children: map[id].children }
    const node = map[id]
    if (parentId === null) {
      roots.push(node)
    } else {
      if (!map[parentId]) {
        map[parentId] = { children: [] }
      }
      map[parentId].children.push(node)
    }
  }
  return roots
}
```

还可以使用这种实现方法

```js
function convertToTree(data) {
  const map = new Map()
  data.forEach(node => map.set(node.id, { ...node, children: [] }))
  for (const node of map.values()) {
    if (node.parentId) {
      const parent = map.get(node.parentId)
      parent.children.push(node)
    }
  }
  return [...map.values()].filter(node => !node.parentId)
}
```

首先，我们创建一个空的 Map，并使用 forEach 方法遍历输入数据，将每个节点添加到 Map 中。接着，我们使用 Map 的 values() 方法来返回一个迭代器，然后遍历每个节点，查找它的父节点，并将其添加到父节点的 children 属性中。最后，我们使用 filter 方法筛选出所有根节点，返回树形结构。

我们使用以下代码测试该函数：

```js
const data = [
  { id: 1, parentId: null, name: "根节点" },
  { id: 2, parentId: 1, name: "子节点1" },
  { id: 3, parentId: 1, name: "子节点2" },
  { id: 4, parentId: 2, name: "子节点1.1" },
  { id: 5, parentId: 2, name: "子节点1.2" },
  { id: 6, parentId: 3, name: "子节点2.1" }
]

const tree = convertToTree(data)
console.log(tree)
```
