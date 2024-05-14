# useDrag

用于实现列表拖拽排序的功能。

## 基础用法

<preview path="../../components/sunDragSort/index.vue" title="基本使用" description="可循环的数组对象，拖拽进行排序。"></preview>

## API

### Attributes

| <div style="width:80px">参数属性</div> | <div style="width:250px">说明</div> | <div style="width:100px">类型</div> | <div style="width:100px">默认值</div> |
| -------------------------------------- | :---------------------------------- | :---------------------------------: | :-----------------------------------: |
| $event                                 | 当前元素自身属性                    |               object                |                                       |
| key                                    | 当前元素索引                        |               Number                |                   0                   |
| dragData                               | 拖拽数据源                          |                Array                |                  [ ]                  |
