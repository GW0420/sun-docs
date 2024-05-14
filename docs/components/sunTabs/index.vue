<template>
  <sunTabs :tabsList="tabsList" :tabsColor="tabsColor" :tabsGap="tabsGap"></sunTabs>
</template>

<script setup>
import { ref } from "vue"
import data from "@gw0420/hooks"

const { sunTabs } = data

const tabsList = ref([
  {
    key: 0,
    name: "User"
  },
  {
    key: 1,
    name: "Config"
  },
  {
    key: 2,
    name: "Role"
  },
  {
    key: 3,
    name: "Dropdown"
  },
  {
    key: 4,
    name: "Task"
  }
])

const tabsColor = ref("orange")
const tabsGap = ref(32)
</script>

<style scoped lang="scss"></style>
