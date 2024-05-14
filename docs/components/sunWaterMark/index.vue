<template>
  <el-row class="watermark" :key="refresh">
    <sun-Button :color="useRandomColor()" size="middle" type="plain" :key="item" @click="onCreateWatermark">
      创建基础水印
    </sun-Button>
    <sun-Button :color="useRandomColor()" size="middle" type="plain" :key="item" @click="onCreateColorWatermark">
      创建彩色水印
    </sun-Button>
    <sun-Button :color="useRandomColor()" size="middle" type="plain" :key="item" @click="onCreateFilterWatermark">
      创建模糊水印
    </sun-Button>
  </el-row>
  <el-row class="watermark" :key="refresh">
    <sun-Button :color="useRandomColor()" size="middle" type="plain" :key="item" @click="onCreateImgWatermark">
      创建图片水印
    </sun-Button>
  </el-row>
  <el-row class="watermark" :key="refresh">
    <sun-Button :color="useRandomColor()" size="middle" type="plain" :key="item" @click="onCreateDestoryWatermark">
      销毁水印
    </sun-Button>
    <sun-Button :color="useRandomColor()" size="middle" type="plain" :key="item" @click="onCreateRotateWatermark">
      旋转水印
    </sun-Button>
  </el-row>
</template>

<script setup>
import { reactive, onBeforeUnmount } from "vue"
import pkg from "@gw0420/hooks"

const { sunButton } = pkg
const { useRandomColor } = pkg.utils
const { useWatermark } = pkg.hooks

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

const imageData = reactive({
  contentType: "image",
  image: "https://cdn.jsdelivr.net/gh/zhensherlock/oss@main/uPic/github-mkWBiK.png",
  width: 300,
  height: 300,
  imageWidth: 100,
  filter: "grayscale(100%)"
})
let imageWatermark = new useWatermark(imageData)

let watermark = new useWatermark(watermarkData)

const onCreateWatermark = () => {
  imageWatermark.destroy()
  //   watermarkData.destory()
  watermarkData.fontColor = "#3963bc"
  watermarkData.textType = "stroke"
  watermarkData.filter = ""

  watermark.changeOptions(watermarkData)
}

const onCreateColorWatermark = () => {
  imageWatermark.destroy()
  //   watermarkData.destory()
  watermarkData.fontColor = useRandomColor()
  watermarkData.textType = "stroke"
  watermarkData.filter = ""

  watermark.changeOptions(watermarkData)
}

const onCreateRotateWatermark = () => {
  imageWatermark.destroy()
  watermarkData.fontColor = useRandomColor()
  watermarkData.textType = "stroke"
  watermarkData.rotate += 45
  watermarkData.filter = ""
  watermark.changeOptions(watermarkData)
}

const onCreateFilterWatermark = () => {
  imageWatermark.destroy()
  watermarkData.fontColor = useRandomColor()
  watermarkData.textType = "fill"
  watermarkData.filter = "blur(2px)"
  watermark.changeOptions(watermarkData)
}

const onCreateImgWatermark = () => {
  watermark.destroy()
  imageWatermark.create()
}

const onCreateDestoryWatermark = () => {
  imageWatermark.destroy()
  watermark.destroy()
}

onBeforeUnmount(() => {
  imageWatermark.destroy()
  watermark.destroy()
})
</script>

<style scoped lang="scss">
.watermark {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 16px 0;
  user-select: none;
}
</style>
