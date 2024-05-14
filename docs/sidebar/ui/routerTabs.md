# RouterTabs 路由标签页

动态路由标签，动态计算滑动状态，演示 demo 详情可查看后台路由标签演示。

## 基础用法

<preview path="../../components/sunRouterTabs/index.vue" title="基本使用" description="路由标签的基础增删、左右滑动动画。"></preview>

## API

### Attributes

| <div style="width: 80px">属性名</div> | <div style="width: 300px">说明</div> | <div style="width: 80px">类型</div> | <div style="width: 80px">默认 </div> |
| ------------------------------------- | ------------------------------------ | ----------------------------------- | ------------------------------------ |
| tabsList                              | 路由标签数据。                       | Array                               | [ ]                                  |
| tabsRises                             | 用于判断标签是否添加                 | -1 对现有标签操作， >0 添加新的标签 | -1                                   |

### Methods

| <div style="width: 80px">属性名</div> | <div style="width: 300px">说明</div> | <div style="width: 80px">类型</div> | <div style="width: 80px">默认 </div> |
| ------------------------------------- | ------------------------------------ | ----------------------------------- | ------------------------------------ |
| onCurrent                             | 用于点击单个标签                     | function                            |                                      |
| onDelete                              | 用于点击删除标签                     | function                            |                                      |
| onOpenMenu                            | 用于鼠标右键打开操作弹窗             | function                            |                                      |
| onTagsLeft                            | 用于操作路由标签左移                 | function                            |                                      |
| onTagsRight                           | 用于操作路由标签右移                 | function                            |                                      |
