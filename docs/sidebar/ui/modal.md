# Modal 表单弹窗组件

基于 element-plus , 二次封装表单弹窗组件!

## 基础用法

<preview path="../../components/sunModal/index.vue" title="基本使用" description="可自定义配置搜索表单。"></preview>

## 配置对象

```json
{
  "show": false, // 控制弹窗显示
  "title": "提示信息", // 弹窗标题
  "cancelText": "取消", // 弹窗取消按钮
  "confirmText": "确定", // 弹窗取消按钮
  "width": "40%", // 弹窗内容宽度
  "height": "200px" // 弹窗内容高度
}
```

## API

### Attributes

| <div style="width: 80px">属性名</div> | <div style="width: 300px">说明</div> | <div style="width: 80px">类型</div> | <div style="width: 80px">默认 </div> |
| ------------------------------------- | ------------------------------------ | ----------------------------------- | ------------------------------------ |
| data                                  | 弹窗配置对象。                       | object                              |                                      |

### Methods

| <div style="width: 80px">属性名</div> | <div style="width: 300px">说明</div> | <div style="width: 80px">类型</div> | <div style="width: 80px">默认 </div> |
| ------------------------------------- | ------------------------------------ | ----------------------------------- | ------------------------------------ |
| submit                                | 表单提交后触发                       | function                            |                                      |
