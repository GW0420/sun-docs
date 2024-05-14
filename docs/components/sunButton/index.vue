<template>
  <div class="sun-Button">
    <el-row class="mb-4" :key="refresh">
      <sun-Button :background="useRandomGradienColor()" v-for="item in 7" :key="item">
        Crush!
      </sun-Button>
      <sun-Button :background="useRandomColor()" v-for="item in 7" :key="item">
        Crush!
      </sun-Button>
      <sun-Button :color="useRandomColor()" size="middle" type="plain" v-for="item in 7" :key="item">Crush!</sun-Button>
      <sun-Button :color="useRandomColor()" size="middle" type="text" v-for="item in 7" :key="item">Crush!</sun-Button>
    </el-row>
  </div>
</template>

<script setup>
import pkg from "@gw0420/hooks"

const { sunButton } = pkg
const { useRandomColor, useRandomGradienColor } = pkg.utils
</script>

<style scoped lang="scss">
.mb-4 {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 16px 0;
}
</style>
