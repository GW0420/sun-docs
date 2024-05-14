<template>
  <div class="jsontoTree">
    <el-tree :data="treeData" default-expand-all />
  </div>
</template>

<script setup>
import data from '@gw0420/hooks'

const { useToTree } = data.utils

const treeJson = [
  { id: 1, parentId: null, label: "根节点" },
  { id: 2, parentId: 1, label: "子节点1" },
  { id: 3, parentId: 1, label: "子节点2" },
  { id: 4, parentId: 2, label: "子节点1.1" },
  { id: 5, parentId: 2, label: "子节点1.2" },
  { id: 6, parentId: 3, label: "子节点2.1" }
]


// function tranListToTreeData(list) {
//   // 1. 定义两个中间变量
//   const treeList = [] // 最终要产出的树状数组
//   let map = {} // 存储映射关系

//   // 2. 建立一个映射关系，遍历数组,并给每个元素补充children属性.
//   // 映射关系: 目的是让我们能通过id快速找到对应的元素
//   // 补充children：让后边的计算更方便
//   list.forEach(item => {
//     if (!item.children) {
//       item.children = []
//     }
//     map[item.id] = item
//   })
//   // 循环
//   list.forEach(item => {
//     // 对于每一个元素来说，先找它的上级
//     //    如果能找到，说明它有上级，则要把它添加到上级的children中去
//     //    如果找不到，说明它没有上级，直接添加到 treeList
//     const parent = map[item.parentId]
//     // 如果存在上级则表示item不是最顶层的数据
//     if (parent) {
//       parent.children.push(item)
//     } else {
//       // 如果不存在上级 则是顶层数据,直接添加
//       treeList.push(item)
//     }
//   })
//   // 返回
//   return treeList
// }


const treeData = useToTree(treeJson)

</script>

<style scoped lang="scss">
</style>
