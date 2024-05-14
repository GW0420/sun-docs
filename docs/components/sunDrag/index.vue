<template>
  <div class="sun-drag-1">
    <div class="sun-drag-block drag1">👋 拖拽这里!</div>
  </div>
  <div class="sun-drag-2">
    <div class="sun-drag-block drag2">👋 拖拽这里!</div>
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import pkg from "@gw0420/hooks"

const { useDrag } = pkg.hooks

onMounted(() => {
  useDrag(".drag1")
  useDrag(".drag2")
})

</script>

<style lang="scss" scoped>
.sun-drag-1 {
  width: 100%;
  height: 100px;
}
.sun-drag-2 {
  width: 100%;
  height: 100px;
}
.sun-drag-block {
  width: 120px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
  color: #fff;
  border-radius: 4px;
  position: fixed;
  cursor: move;
  z-index: 9999;
  padding: 16px;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &.drag1 {
    background: linear-gradient(to right, rgb(99, 60, 243), rgba(99, 60, 243, 0.6));
  }
  &.drag2 {
    background: linear-gradient(to right, rgb(61, 76, 146), rgba(61, 76, 146, 0.6));
  }
  .drag-target {
    font-size: 16px;
  }
  .drag-desc {
    color: #ccc;
    font-size: 12px;
    text-align: left;
  }
  .drag-position {
    color: #ccc;
    font-size: 14px;
    text-align: left;
  }
}
</style>
