# 快速开始

介绍如何在项目中使用 @gw0420/hooks。

## 安装

```bash

# with npm
npm install @gw0420/hooks

# or with yarn
yarn add @gw0420/hooks

# or with pnpm
pnpm add @gw0420/hooks

```

## main.js

```js
// 引入样式
import "/node_modules/@gw0420/hooks/hooks.css"
```

## 按需引入

:::tip
函数库没有做全局导入，可根据所需自行导入使用业务组件、功能函数、工具函数。
:::

```js
import data from "@gw0420/hooks")

// 业务组件
const { sunPreviewImg, sunRouterTabs, sunTabs } = data
// 功能函数, 放在data.hooks下
const { useDrag, useWatermark } = data.hooks
// 业务函数,放在data.utils
const { useFormatAmount,useCopyText } = data.utils
```

## 使用

```vue
<template>
  <div class="app">
    <!-- 函数 -->
    <div>{{ useFormatAmount(134534777, 2) }}</div>
    <!-- 组件 -->
    <sunButton color="orange" backgroun="orange" type="plain" size="middle"></sunButton>
  </div>
</template>

<script setup>
import { ref } from "vue"
import data from "@gw0420/hooks"

// 业务组件
const { sunPreviewImg, sunRouterTabs, sunTabs } = data
// 业务函数,放在data.utils
const { useFormatAmount, useCopyText } = data.utils

// 拖拽函数
const { useDrag } = data.hooks
useDrag(".drag1")

// 水印函数
const { useWatermark } = data.hooks
// 水印配置信息
const watermarkData = reactive({
  width: 200,
  height: 200,
  rotate: 45,
  fontSize: "25px",
  fontColor: "",
  fontWeight: "400",
  content: "gavin gu",
  globalAlpha: 0.4,
  filter: "",
  textType: ""
})
// 获取水印示例
let watermark = new useWatermark(watermarkData
// 创建水印
watermark.create()
// 销毁水印
watermark.destroy()
</script>
```
