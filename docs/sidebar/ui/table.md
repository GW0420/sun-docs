# Table 表格组件

基于 element-plus , el-table表格组件封装。

## 基础表格

<preview path="../../components/sunTable/index1.vue" title="基本使用" description="可自定义配置表格数据及分页显示。"></preview>

## 表格合并

<preview path="../../components/sunTable/index2.vue" title="基本使用" description="通过给 table 传入span-method方法可以实现合并行或列， 方法的参数是一个对象，里面包含当前行 row、当前列 column、当前行号 rowIndex、当前列号 columnIndex 四个属性。"></preview>


## API

### Attributes

| <div style="width: 80px">属性名</div>|<div style="width: 250px">说明</div>| <div style="width: 80px">类型</div>| <div style="width: 80px">默认 </div>|
| ------------------------------------| ------------------------| ----------------------------------|------------------------------------|
| data      | 显示的数据   | Array |           |
| column    | 显示的列     | Array |           |
| height    | 表格高度     | Number |           |
| border    | 表格表框     | String |           |
| isPage    | 是否显示分页    | Bollean |           |
| rowClassName    | 行的 className 的回调方法     | Function |           |
| cellClassName    | 单元格的 className 的回调方法     | Function |           |
| objectSpanMethod    | 合并行或列的计算方法    | Function |           |
| ......    |  详情请参考 elelment-plus 文档  |  |           |



### Methods 

| <div style="width: 150px">方法名</div>|<div style="width: 150px">说明</div>| <div style="width: 80px">类型</div>| <div style="width: 80px">默认 </div>|
| ------------------------------------| ------------------------| ----------------------------------|------------------------------------|
| size-change      | 表单提交重置后触发   | function |           |
| current-change      | 表单提交重置后触发   | function |           |
| selection-change      | 表单提交重置后触发   | function |           |
| ......    |  详情请参考 elelment-plus 文档  |  |           |



