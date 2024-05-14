<template>
  <div class="sun-randomColor">
    <div v-for="item in 3" :key="item">
      <div class="randomColor" v-for="item in 4" :key="item">
        <div class="circle" :style="{ background: useRandomColor() }"></div>
        <div class="text" :style="{ color: useRandomColor() }">Gavin GU</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import pkg from "@gw0420/hooks"

const { useRandomColor } = pkg.utils
</script>

<style scoped lang="scss">
.sun-randomColor {
  display: flex;
  gap: 32px;
  .randomColor {
    display: flex;
    align-items: center;
    font-size: 16px;
    .circle {
      width: 10px;
      height: 10px;
      margin-right: 5px;
      border-radius: 100%;
    }
  }
}
</style>
