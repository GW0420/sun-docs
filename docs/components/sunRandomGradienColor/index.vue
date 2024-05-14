<template>
  <div class="sun-randomColor">
    <el-row class="mb-4" :key="refresh">
      <sun-Button :background="useRandomGradienColor()" size="middle" type="default" v-for="item in 10" :key="item">
        <!-- gavin -->
      </sun-Button>
    </el-row>
    <el-row class="mb-4" :key="refresh">
      <sun-Button :background="useRandomGradienColor()" size="middle" type="default" v-for="item in 10" :key="item">
        <!-- gavin -->
      </sun-Button>
    </el-row>
  </div>
</template>

<script setup>
import pkg from "@gw0420/hooks"
const { sunButton } = pkg
const { useRandomGradienColor } = pkg.utils
</script>

<style scoped lang="scss">
.mb-4 {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 16px 0;
}
</style>
