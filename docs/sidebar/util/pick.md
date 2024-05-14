# usePick

Pick 函数在 JavaScript 中用于从对象中选择特定值，它是通过从提供的项目中选择某些属性来创建一个新对象的方法。

## 基础用法

<preview path="../../components/sunPick/index.vue" title="基本使用" description="可以从任何对象中提取属性的子集（如果该属性可用）"></preview>

## API

### Attributes

| <div style="width:80px">参数属性</div> | <div style="width:250px">说明</div> | <div style="width:100px">类型</div> | <div style="width:100px">默认值</div> |
| -------------------------------------- | :---------------------------------- | :---------------------------------: | :-----------------------------------: |
| pickData                               | 源对象                              |               Object                |                                       |
| pickKeys                               | 提取属性的子集 key                  |                Array                |                  [ ]                  |
