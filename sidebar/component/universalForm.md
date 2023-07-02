# 表单组件

## 通用表单

<preview path="../../views/searchform.vue" title="基本使用" description="sunnnnnnnnnnnnnnn"></preview>

### 输出结果

```js
{
  "searchKeyword": "通用表单",
  "select": "Option3",
  "beginTime": "2023-07-01T16:00:00.000Z",
  "endTime": "2023-07-28T16:00:00.000Z"
}
```

## UniversalForm API

| 属性名      |     说明     |            类型             | 默认值 |
| ----------- | :----------: | :-------------------------: | ------ |
| type        |  选项框类型  | text/select /date /datetime |        |
| placeholder |   默认描述   |                             |        |
| width       |     宽度     |                             | 200px  |
| icon        |     图标     |                             |        |
| value       |    默认值    |                             |        |
| options     |  下拉框数据  |          json 格式          |        |
| format      | 日期时间格式 |     YYYY-MM-DD HH:mm:ss     |        |

<!-- <demo src="../../views/button.vue" desc="使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。"></demo> -->
