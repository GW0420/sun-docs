<template>
  <div class="debounce">
    <el-row class="mb-4">
      <sun-Button background="linear-gradient(to right, rgb(85, 127, 235), rgba(85, 127, 235, 0.6))" @click="onDebounceImmediate1">
        连续点击， 每500ms只会执行最后一次，立即执行
      </sun-Button>
    </el-row>
    <el-row class="mb-4">
      <sun-Button background="linear-gradient(to right, rgb(85, 127, 235), rgba(85, 127, 235, 0.6))" @click="onDebounceDelay1">
        连续点击， 每500ms只会执行最后一次，延迟执行
      </sun-Button>
    </el-row>
    <el-row class="mb-4">
      <sun-Button background="linear-gradient(to right, rgb(85, 127, 235), rgba(85, 127, 235, 0.6))" @click="onDebounceImmediate2">
        连续点击， 每1000ms只会执行最后一次，立即执行
      </sun-Button>
    </el-row>
    <el-row class="mb-4">
      <sun-Button background="linear-gradient(to right, rgb(85, 127, 235), rgba(85, 127, 235, 0.6))" @click="onDebounceDelay2">
        连续点击， 每1000ms只会执行最后一次，延迟执行
      </sun-Button>
    </el-row>

  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import data from "@gw0420/hooks"

const { sunButton } = data
const { useDebounce } = data.hooks

const onDebounceImmediate1 = useDebounce(() => {
  ElMessage.success('测试测试测试xxx')
}, 500)

const onDebounceDelay1 = useDebounce(() => {
  ElMessage.success('测试测试测试xxx')
}, 500, false)

const onDebounceImmediate2 = useDebounce(() => {
  ElMessage.success('测试测试测试xxx')
}, 1000)

const onDebounceDelay2 = useDebounce(() => {
  ElMessage.success('测试测试测试xxx')
}, 1000, false)



// function debounce(func, delay, immediate = true) {
//   let timeoutId; // 声明一个变量用于保存定时器的ID

//   // 返回一个闭包函数
//   return function (...args) {
//     const context = this; // 保存函数执行时的上下文（this指向）
//     const later = () => {
//       timeoutId = null; // 清空定时器的ID
//       if (!immediate) {
//         func.apply(context, args); // 如果不是立即执行，则调用函数
//       }
//     };

//     clearTimeout(timeoutId); // 清除之前的定时器

//     if (immediate && !timeoutId) {
//       // 如果是立即执行且之前没有定时器
//       func.apply(context, args); // 立即执行函数
//     }

//     timeoutId = setTimeout(later, delay); // 创建一个新的定时器，在延迟时间后执行later函数
//   }
// }

</script>

<style scoped lang="scss">
.mb-4 {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 16px 0;
}
</style>
