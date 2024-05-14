<template>
  <div>
    <sunMetion :values="values" ref="content"></sunMetion>
    <el-divider />
    <div class="metion-button">
      <sunButton background="linear-gradient(to right, rgb(17, 77, 197), rgba(17, 77, 197, 0.6))" @click="onPublish">发布</sunButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import data from '@gw0420/hooks'

const { sunMetion, sunButton } = data

const values = [
  { key: 'Phil Heartman', value: 'Phil Heartman', url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' },
  { key: 'Gordon Ramsey', value: 'Gordon Ramsey', url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' },
  { key: 'Jordan Humphreys', value: 'Jordan Humphreys', url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' }
]

const content = ref()
const onPublish = () => {
  console.log('发布的内容：', content.value.getTextarea());
}
</script>

<style scoped lang="scss">
.textarea {
  // border: 1px solid #3963bc;
  border-radius: 4px;
  // padding: 8px;
}

.metion-button {
  float: right;
}
</style>
