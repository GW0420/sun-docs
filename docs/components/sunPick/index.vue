<template>
  <div class="once">
    <el-row class="mb-4">
      <div class="key">转换前的对象:</div>
      <div class="content">{{ pickData }}</div>
    </el-row>
    <el-row class="mb-4">
      <div class="key">转换后的对象:</div>
      <div class="content">{{ selected }}</div>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from "vue"
import data from "@gw0420/hooks"

const { usePick } = data.utils
const pickData = {
  id: 1,
  name: "Paul",
  password: "82ada72easd7",
  role: "admin",
  website: "https://www.paulsblog.dev"
}
const pickKeys = ["name", "website"]
const selected = usePick(pickData, pickKeys)
</script>

<style scoped lang="scss">
.mb-4 {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 16px 0;
}
.key {
  color: rgba(32, 128, 240, 0.8);
}
.content {
  padding: 16px;
  background: rgba(125, 125, 125, 0.04);
  border-radius: 8px;
  width: 100%;
  color: #f87171;
}
</style>
