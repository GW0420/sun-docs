<template>
  <div class="once">
    <el-row class="mb-4">
      <sun-Button background="linear-gradient(to right, rgb(85, 127, 235), rgba(85, 127, 235, 0.6))" @click="onOnce">
        连续点击， 只会执行第一次
      </sun-Button>
    </el-row>
    <el-row class="mb-4">
      <div class="content">这里是测试内容，一共执行了{{count}}次！</div>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import data from "@gw0420/hooks"

const { sunButton } = data
const { useOnce } = data.hooks


const count = ref(0)

const onOnce = useOnce(() => {
  count.value++
}, 500)



// function once(func) {
//   let ran = false;
//   let result;
//   return function () {
//     if (ran) return result;
//     result = func.apply(this, arguments);
//     ran = true;
//     return result;
//   };
// }


</script>

<style scoped lang="scss">
.mb-4 {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 16px 0;
}

.content {
  padding: 16px;
  background: rgba(125, 125, 125, 0.04);
  border-radius: 8px;
  width: 100%;
}
</style>
