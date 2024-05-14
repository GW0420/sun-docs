<template>
  <div class="sun-Button">
    <el-row class="mb-4">
      <sun-Special-Button v-for="item in colorList1" :key="item" :color="item" name="gavin"></sun-Special-Button>
    </el-row>
    <el-row class="mb-4">
      <sun-Special-Button v-for="item in colorList2" :key="item" :color="item" name="gavin"></sun-Special-Button>
    </el-row>
  </div>
</template>

<script setup>
import pkg from "@gw0420/hooks"

const { sunSpecialButton } = pkg
const colorList1 = ["#cdd926", "#4581ea", "#efb909", "#e179c8", "#59925f"]
const colorList2 = ["#fb8c39", "#675dcb", "#508e6d", "#3e8e95", "#8b51a0"]
</script>

<style scoped lang="scss">
.mb-4 {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 16px 0;
}
</style>
