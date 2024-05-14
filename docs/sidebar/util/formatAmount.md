# useFormatAmount

用于格式化金额，千分位并保留两位小数。

## 基础用法

<preview path="../../components/sunFormatAmount/index.vue" title="基本使用" description="接收三个参数，第一个参数 amount（金额） ，第二个参数 symbol（前置符号），第三个参数 digit（保留小数点后位数），返回格式化后的金额。"></preview>

## API

### Attributes

| <div style="width:80px">参数属性</div> | <div style="width:250px">说明</div> | <div style="width:100px">类型</div> | <div style="width:100px">默认值</div> |
| -------------------------------------- | :---------------------------------- | :---------------------------------: | :-----------------------------------: |
| amount                                 | 金额                                |               number                |                   0                   |
| symbol                                 | 前置符号                            |               String                |                  ￥                   |
| digit                                  | 保留小数点后位数                    |               number                |                   2                   |
