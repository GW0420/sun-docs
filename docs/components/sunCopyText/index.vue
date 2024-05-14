<template>
  <div class="copyText">
    <div class="copyText-item">
      <div><el-input v-model="copyText1" placeholder="请输入" style="width: 200px" /></div>
      <div @click="onCopyText(copyText1)">
        <sun-Button :color="useRandomColor()" size="middle" type="text">复制</sun-Button>
      </div>
    </div>
    <div class="copyText-item">
      <div><el-input v-model="copyText2" placeholder="请输入" style="width: 200px" /></div>
      <div @click="onCopyText(copyText2)">
        <sun-Button :color="useRandomColor()" size="middle" type="text">复制</sun-Button>
      </div>
    </div>
    <div class="copyText-item">
      <div><el-input v-model="copyText3" placeholder="请输入" style="width: 200px" /></div>
      <div @click="onCopyText(copyText3)">
        <sun-Button :color="useRandomColor()" size="middle" type="text">复制</sun-Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import pkg from "@gw0420/hooks"
import { ElMessage } from "element-plus"
const { sunButton } = pkg
const { useRandomColor } = pkg.utils
const { useCopyText } = pkg.hooks

const copyText1 = ref("复制文字1")
const copyText2 = ref("复制文字2")
const copyText3 = ref("复制文字3")

const onCopyText = text => {
  useCopyText(text)
  ElMessage.success(text)
}
</script>

<style scoped lang="scss">
.copyText {
  display: flex;
  flex-direction: column;
  gap: 16px;
  .copyText-item {
    display: flex;
    gap: 16px;
  }
}
</style>
