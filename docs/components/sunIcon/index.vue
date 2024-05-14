<template>
  <div class="sun-icon-wrap">
    <div class="sun-icon">
      <div class="sun-icon-item" v-for="(item, index) in iconList" :key="index">
        <div class="sun-icon-desc">
          <sun-Icon :iconName="item" :size="size" :color="color"></sun-Icon>
        </div>
        <div class="sun-icon-copy" @click="onCopyIconClick(item)">复制</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import { ElMessage } from "element-plus"
import pkg from "@gw0420/hooks"

const { sunIcon } = pkg
const { useCopyText } = pkg.hooks

const iconList = []
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  iconList.push(key)
}

const size = ref(20)
const color = ref("#3963bc")

// 复制图标
const onCopyIconClick = text => {
  let iconText = `<el-icon> <${text}/> </el-icon>`
  useCopyText(iconText)
  ElMessage.success(text)
}
</script>

<style scoped lang="scss">
.sun-icon-wrap {
  width: 100%;
  height: 300px;
  // border: 1px solid orange;
  overflow: hidden;
  overflow-y: scroll;
}

.sun-icon {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  .sun-icon-item {
    height: 60px;
    width: 90px;
    border: 1px solid #ededf0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    .sun-icon-desc {
      margin: auto 0;
    }
    .sun-icon-copy {
      color: #fff;
      cursor: pointer;
      height: 0;
      line-height: 20px;
      background: v-bind(color);
      width: 100%;
      text-align: center;
      transition: all 0.5s;
      opacity: 0;
    }
    &:hover {
      .sun-icon-copy {
        opacity: 1;
        height: 20px;
        line-height: 20px;
      }
    }
  }
}
</style>
