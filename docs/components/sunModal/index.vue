<template>
  <div class="sun-modal">
    <sunButton :background="useRandomGradienColor()" @click="onOpenModal">打开弹窗</sunButton>

    <sunModal v-model:show="data.show" v-model:data="data" @submit="onSubmit">
      <template #content>
        <div>It should be noted that the content will not be aligned in center by default</div>
        <div>It should be noted that the content will not be aligned in center by default</div>
        <div>It should be noted that the content will not be aligned in center by default</div>
        <div>It should be noted that the content will not be aligned in center by default</div>
        <div>It should be noted that the content will not be aligned in center by default</div>
        <div>It should be noted that the content will not be aligned in center by default</div>
        <div>It should be noted that the content will not be aligned in center by default</div>
        <div>It should be noted that the content will not be aligned in center by default</div>
        <div>It should be noted that the content will not be aligned in center by default</div>
        <div>It should be noted that the content will not be aligned in center by default</div>
        <div>It should be noted that the content will not be aligned in center by default</div>
        <div>It should be noted that the content will not be aligned in center by default</div>
        <div>It should be noted that the content will not be aligned in center by default</div>
        <div>It should be noted that the content will not be aligned in center by default</div>
        <div>It should be noted that the content will not be aligned in center by default</div>
        <div>It should be noted that the content will not be aligned in center by default</div>
        <div>It should be noted that the content will not be aligned in center by default</div>
        <div>It should be noted that the content will not be aligned in center by default</div>
        <div>It should be noted that the content will not be aligned in center by default</div>
        <div>It should be noted that the content will not be aligned in center by default</div>
        <div>It should be noted that the content will not be aligned in center by default</div>
        <div>It should be noted that the content will not be aligned in center by default</div>
        <div>It should be noted that the content will not be aligned in center by default</div>
        <div>It should be noted that the content will not be aligned in center by default</div>
        <div>It should be noted that the content will not be aligned in center by default</div>
        <div>It should be noted that the content will not be aligned in center by default</div>
        <div>It should be noted that the content will not be aligned in center by default</div>
        <div>It should be noted that the content will not be aligned in center by default</div>
      </template>
    </sunModal>
  </div>
</template>

<script setup>
import { ref } from "vue"
import pkg from "@gw0420/hooks"

const { sunButton, sunModal } = pkg
const { useRandomGradienColor } = pkg.utils
const data = ref({
  show: false,
  title: "提示信息",
  cancelText: "取消",
  confirmText: "确定",
  width: "40%",
  height: "200px"
})

const onOpenModal = () => {
  data.value.show = true
}

const onSubmit = () => {
  data.value.show = false

  console.log("submit")
}
</script>

<style scoped lang="scss"></style>
