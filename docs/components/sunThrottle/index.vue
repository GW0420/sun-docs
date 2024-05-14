<template>
  <div class="throttle">
    <el-row class="mb-4">
      <sun-Button background="linear-gradient(to right, rgb(85, 127, 235), rgba(85, 127, 235, 0.6))" @click="onThrottle1">
        连续点击， 每0.5s只会执行一次
      </sun-Button>
    </el-row>
    <el-row class="mb-4">
      <sun-Button background="linear-gradient(to right, rgb(85, 127, 235), rgba(85, 127, 235, 0.6))" @click="onThrottle2">
        连续点击， 每1s只会执行一次
      </sun-Button>
    </el-row>
    <el-row class="mb-4">
      <sun-Button background="linear-gradient(to right, rgb(85, 127, 235), rgba(85, 127, 235, 0.6))" @click="onThrottle3">
        连续点击， 每2s只会执行一次
      </sun-Button>
    </el-row>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import data from "@gw0420/hooks"

const { sunButton } = data
const { useThrottle } = data.hooks

const onThrottle1 = useThrottle(() => {
  ElMessage.success('这是一段测试内容...')
}, 500)

const onThrottle2 = useThrottle(() => {
  ElMessage.success('这是一段测试内容...')
}, 1000)

const onThrottle3 = useThrottle(() => {
  ElMessage.success('这是一段测试内容...')
}, 2000)


// 定义一个节流函数
// function throttle(func, delay) {
//   let wait = false;

//   return (...args) => {
//     if (wait) {
//       return;
//     }

//     func(...args);
//     wait = true;
//     setTimeout(() => {
//       wait = false;
//     }, delay);
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
