<template>
  <div class="sun-icon-wrap">
    <div class="sun-icon">
      <div class="sun-icon-item" v-for="(item, index) in iconList" :key="index">
        <div class="sun-icon-desc">
          <component :is="item.value"></component>
        </div>
        <div class="mark">{{item.label}}</div>
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
// import test from "./conponents/lv1.vue"

const { sunIcon } = pkg
const { useCopyText } = pkg.hooks
const size = ref(20)
const color = ref("#3963bc")
const iconList = [
  {
    label: 'L1.vue',
    value: 'lv-1'
  },
  {
    label: 'L2.vue',
    value: 'lv-2'
  },
  {
    label: 'L3.vue',
    value: 'lv-3'
  },
  {
    label: 'L4.vue',
    value: 'lv-4'
  },
  {
    label: 'L5.vue',
    value: 'lv-5'
  },
  {
    label: 'L6.vue',
    value: 'lv-6'
  },
  {
    label: 'L7.vue',
    value: 'lv-7'
  },
  {
    label: 'L8.vue',
    value: 'lv-8'
  },
  {
    label: 'L9.vue',
    value: 'lv-9'
  },
  {
    label: 'L10.vue',
    value: 'lv-10'
  },
  {
    label: 'L11.vue',
    value: 'lv-11'
  },
  {
    label: 'L12.vue',
    value: 'lv-12'
  },
  {
    label: 'L13.vue',
    value: 'lv-13'
  },
  {
    label: 'L14.vue',
    value: 'lv-14'
  },
  {
    label: 'L15.vue',
    value: 'lv-15'
  },
  {
    label: 'L16.vue',
    value: 'lv-16'
  },
  {
    label: 'L17.vue',
    value: 'lv-17'
  },
  {
    label: 'L18.vue',
    value: 'lv-18'
  },
  {
    label: 'L19.vue',
    value: 'lv-19'
  },
  {
    label: 'L20.vue',
    value: 'lv-20'
  },
  {
    label: 'L21.vue',
    value: 'lv-21'
  },
  {
    label: 'L22.vue',
    value: 'lv-22'
  },
  // {
  //   label: 'L23.vue',
  //   value: 'lv-23'
  // },
  {
    label: 'L24.vue',
    value: 'lv-24'
  }, {
    label: 'L25.vue',
    value: 'lv-25'
  }, {
    label: 'L26.vue',
    value: 'lv-26'
  }, {
    label: 'L27.vue',
    value: 'lv-27'
  }, {
    label: 'L28.vue',
    value: 'lv-28'
  }, {
    label: 'L29.vue',
    value: 'lv-29'
  }, {
    label: 'L30.vue',
    value: 'lv-30'
  },
  {
    label: 'L31.vue',
    value: 'lv-31'
  }, {
    label: 'L32.vue',
    value: 'lv-32'
  }, {
    label: 'L33.vue',
    value: 'lv-33'
  }, {
    label: 'L34.vue',
    value: 'lv-34'
  }, {
    label: 'L35.vue',
    value: 'lv-35'
  }, {
    label: 'L36.vue',
    value: 'lv-36'
  }, {
    label: 'L37.vue',
    value: 'lv-37'
  },
  {
    label: 'L38.vue',
    value: 'lv-38'
  },
  {
    label: 'L39.vue',
    value: 'lv-39'
  }
]


// 复制图标
const onCopyIconClick = text => {
  let iconText = `<${text.value}></${text.value}>`
  useCopyText(iconText)
  ElMessage.success("Loading组件：" + iconText)
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
    height: 110px;
    width: 110px;
    border: 1px solid #ededf0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    .sun-icon-desc {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .sun-icon-copy {
      position: absolute;
      bottom: 0;
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
    .mark {
      position: absolute;
      bottom: 0;
      font-size: 12px;
      font-weight: 600;
      color: #3963bc;
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
