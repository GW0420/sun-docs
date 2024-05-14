<template>
  <div class="profile">
    <sunSearchForm :formData="formData" @confirmData="onConfirmData"></sunSearchForm>
  </div>
</template>

<script setup>
import { ref } from "vue"
import pkg from "@gw0420/hooks"

const { sunSearchForm } = pkg
const formData = ref([
  {
    type: "text",
    placeholder: "请输入关键字",
    width: "100px",
    icon: "Search",
    value: ["searchKeyword", ""]
  },
  {
    type: "select",
    placeholder: "请选择",
    width: "100px",
    multiple: false,
    value: ["select", ""],
    options: [
      {
        value: "Option1",
        label: "Option1"
      },
      {
        value: "Option2",
        label: "Option2"
      },
      {
        value: "Option3",
        label: "Option3"
      },
      {
        value: "Option4",
        label: "Option4"
      },
      {
        value: "Option5",
        label: "Option5"
      }
    ]
  },
  {
    type: "date",
    placeholder: "开始日期",
    format: "YYYY-MM-DD",
    width: "120px",
    value: ["beginTime", ""]
  },
  {
    type: "datetime",
    placeholder: "结束日期",
    format: "YYYY-MM-DD HH:mm:ss",
    width: "120px",
    value: ["endTime", ""]
  }
])

const onConfirmData = msg => {
  console.log("🚀 ~ file: index.vue:53 ~ onConfirmData ~ msg:", msg)
}
</script>

<style lang="scss">
.profile {
  color: var(--test);
}
</style>
