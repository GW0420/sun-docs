# useWatermark

用于创建页面水印。

## 基础用法

<preview path="../../components/sunWaterMark/index.vue" title="基本使用" description="可配置参数来实现想要的水印。"></preview>

## API

### Attributes

| <div style="width: 80px">属性名</div> | <div style="width: 300px">说明</div> | <div style="width: 80px">类型</div> | <div style="width: 80px">默认 </div> |
| ------------------------------------- | ------------------------------------ | ----------------------------------- | ------------------------------------ |
| content                               | 创建水印的内容                       | number                              | gavin gu                             |
| width                                 | 水印宽度                             | number                              | 200                                  |
| height                                | 水印高度                             | number                              | 200                                  |
| rotate                                | 水印颜色                             | string                              | 45                                   |
| fontSize                              | 水印字体大小                         | string                              | 25                                   |
| fontColor                             | 水印字体颜色                         | string                              | #3963bc                              |
| fontWeight                            | 水印粗体                             | number                              | 400                                  |
| globalAlpha                           | 水印透明度（0.0 ~ 1.0）              | number                              | 0.4                                  |
| textType                              | 水印内容文字类新类型                 | string                              | stroke                               |
| filter                                | 水印内容高斯模糊                     | string                              | blur(2px)                            |
